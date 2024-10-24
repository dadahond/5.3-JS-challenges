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
