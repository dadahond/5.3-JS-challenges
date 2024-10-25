// Misol-1!!! Biror sahifada bo'sh elementi mavjud bo'lsin. JavaScript orqali yangi bir paragraf ( <p> ) yarating va uni sahifadagi bo'sh div ichiga joylashtiring. Paragraf matni o'zingiz xohlagan biror narsani o'z ichiga olishi mumkin.

// Misol-1! Solution!
// const content = document.querySelector("#content");
// const paragraph = document.createElement("p");
// paragraph.textContent = "This is a random photo from picsum!";
// content.appendChild(paragraph);

// Misol-2!!! Sahifada biror tugma ( ) va paragraf bo'lsin. Tugma bosilganda, paragrafning matni o'zgartirilishi kerak.

// Misol-2! Solution!
// const changeText = document.querySelector("#changeText");
// const text = document.querySelector("#text");
// changeText.addEventListener("click", () => {
//     text.textContent = "This is a new text!";
// });

// Misol-3!!! Bir nechta tugmalar yarating, har bir tugma bosilganda sahifadagi rasm boshqa rasmga almashtiriladi.

// Misol-3! Solution!
// const button1 = document.querySelector("#button1");
// const button2 = document.querySelector("#button2");
// const button3 = document.querySelector("#button3");
// const imageId = document.querySelector("#imageId");
// button1.addEventListener("click", () => {
//     imageId.src = `https://picsum.photos/id/${Math.ceil(
//     Math.random() * 300
//   )}/1000`;
// });
// button2.addEventListener("click", () => {
//     imageId.src = `https://picsum.photos/id/${Math.ceil(
//     Math.random() * 300
//   )}/1000`;
// });
// button3.addEventListener("click", () => {
//     imageId.src = `https://picsum.photos/id/${Math.ceil(
//     Math.random() * 300
//   )}/1000`;
// });

// Misol-4!!! JavaScript orqali sahifadagi elementning stilini o'zgartirish uchun amaliyot. Tugmani bosganda, matn rangi va shrift hajmi o'zgarishi kerak.

// Misol-4! Solution!
// const text = document.getElementById("styledText");
// const buttonColor = document.getElementById("colorButton");
// const buttonFontF = document.getElementById("fontFamilyButton");

// buttonColor.addEventListener("click", () => {
//   text.style.color = "red";
// });
// buttonFontF.addEventListener("click", () => {
//   text.style.fontFamily = "Cursive";
// });

// Misol-5!!! Sahifada bo'sh <ul> elementi bo'lsin. JavaScript orqali foydalanuvchi tomonidan kiritilgan ma'lumotni yangi <li> element sifatida qo'shish.

// Misol-5!!! Solution!
// const button = document.querySelector("#addItem");
// const input = document.querySelector("#item");
// const ul = document.querySelector("#list");

// button.addEventListener("click", () => {
//   const li = document.createElement("li");
//   li.textContent = input.value;
//   ul.appendChild(li);
//   input.value = "";
// });

// Misol - 6! Sahifadagi biror paragrafni yashirish va ko'rsatish uchun tugma qo'shing. Tugma bosilganda paragrafni yashiradi yoki ko'rsatadi.

// Misol-6! Solution!

// const text = document.querySelector("#toggleText");
// const toggleSwitch = document.querySelector(".toggle-switch");

// toggleSwitch.addEventListener("click", () => {
//   if (toggleSwitch.classList.contains("active")) {
//     text.textContent = "";
//   } else {
//     text.textContent = "Hello World";
//   }
// });

// Misol-8! Sahifada real vaqtni (soat, daqiqa, soniya) ko'rsatib turadigan element yarating va har bir soniya yangilanib tursin.

// Misol-8! Solution!

// const time = document.querySelector("#time");
// setInterval(() => {
//   time.textContent = new Date().toLocaleTimeString();
// }, 1000);

// Misol-9!!! Tugmani bosganda sahifa fon rangi tasodifiy ravishda o'zgarib turadi.

const buttonColor = document.querySelector("#buttonColor");
const colors = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

const randomColor = () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += colors[Math.trunc(Math.random() * colors.length)];
  }
  return color;
};
buttonColor.addEventListener("click", () => {
  document.body.style.backgroundColor = randomColor();
});
