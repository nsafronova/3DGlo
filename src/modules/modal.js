const modal = () => {
   const modal = document.querySelector('.popup');
   const modalContent = document.querySelector('.popup-content');
   const buttons = document.querySelectorAll('.popup-btn');
   const closeBtn = modal.querySelector('.popup-close');

   let count = 0;
   let idInterval;
   let width;

   const animateOpen = () => {
      count++;
      idInterval = requestAnimationFrame(animateOpen);
      if (count < 37) {
         modalContent.style.left = count + '%';
      } else {
         cancelAnimationFrame(idInterval);
         count = 0;
      }
   };

   const openModal = () => {
      if (width > 786) {
         animateOpen();
         modal.style.display = 'block';
      } else {
         modal.style.display = 'flex';
      }

   };

   closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
   });

   buttons.forEach(btn => {
      btn.addEventListener('click', () => {
         openModal();

      });
   });


   const listenWidth = () => {
      window.addEventListener('resize', () => {
         width = document.documentElement.clientWidth;
      });
   };

   listenWidth();
};

export default modal;