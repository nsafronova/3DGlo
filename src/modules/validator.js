const validator = () => {

   const inputSquare = document.querySelector('.calc-square');
   const inputCount = document.querySelector('.calc-count');
   const inputDay = document.querySelector('.calc-day');

   const inputText = document.querySelectorAll('[type="text"]');
   const inputEmail = document.querySelectorAll('[type="email"]');
   const inputPhone = document.querySelectorAll('[type="tel"]');


   inputSquare.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D+/, '');
   });

   inputCount.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D+/, '');
   });

   inputDay.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D+/, '');
   });


   inputText.forEach((e) => {
      e.addEventListener('input', (e) => {
         e.target.value = e.target.value.match(/[а-я -]+/gi);
      });
   });


   inputEmail.forEach((e) => {
      e.addEventListener('input', (e) => {
         e.target.value = e.target.value.match(/[a-z0-9@-_.!~*']+/gi);
      });
   });


   inputPhone.forEach((e) => {
      e.addEventListener('input', (e) => {
         e.target.value = e.target.value.match(/[0-9-()]+/gi);
      });
   });

};

export default validator;