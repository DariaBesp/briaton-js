import { getMessage } from "./message.js";

const qsForm = document.querySelector(".questions__form");
const submitBtn = document.querySelector(".questions__btn");
const validator = new JustValidate("#questions-form");

export async function formPost() {
  if (!validator.isValid) {
    return;
  }
  //отключили кнопку
  submitBtn.disabled = true;
  const data = new FormData(qsForm);

  const user = {
    name: data.get("name"),
    email: data.get("email"),
    agree: data.has("agree") || false,
  };

  try {
    const response = await fetch("https://httpbin.org/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const result = await response.json();
      getMessage(
        "icon-check-circle",
        "Благодарим за обращение!",
        "Мы получили вашу заявку и свяжемся с вами в ближайшее время"
      );
      console.log("Данные успешно отправлены:", result);
      qsForm.reset();
    } else {
      throw new Error("Ошибка отправки данных");
    }
  } catch (error) {
    getMessage(
      "icon-error",
      "Не удалось отправить обращение",
      "Что-то пошло не так, попробуйте отправить форму еще раз. Если ошибка повторится — свяжитесь со службой поддержки."
    );
  } finally {
    submitBtn.disabled = false;
  }
}
qsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formPost();
});

export const initForm = () => {
  validator
    .addField("#name", [
      { rule: "required", errorMessage: "Поле обязательно для заполнения" },
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Введите минимум 3 символа",
      },
      { rule: "maxLength", value: 20, errorMessage: "Максимум 20 символов" },
    ])
    .addField("#email", [
      { rule: "required", errorMessage: "Поле обязательно для заполнения" },
      { rule: "email", errorMessage: "Введите email" },
    ])
    .addField("#agree", [
      { rule: "required", errorMessage: "Подтвердите согласие" },
    ]);
};
