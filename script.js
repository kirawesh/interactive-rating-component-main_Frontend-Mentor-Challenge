const ratingState = document.querySelector('.rating-state');
const thankYouState = document.querySelector('.thank-you-state');
const submitButton = document.getElementById('submit-button');
const ratingNumberText = document.getElementById('rating-number-text');
const ratingNumberButtons = document.querySelectorAll('.rating-number-button');


submitButton.addEventListener('click', () => {
    thankYouState.classList.remove('hidden');
    ratingState.style.display = 'none';
});

ratingNumberButtons.forEach((rate) => {
    rate.addEventListener('click', () => {
        ratingNumberText.innerHTML = rate.innerHTML;
    });
});

// script credit - 'tsbsankara' https://www.youtube.com/watch?v=cQnUopEeZgw
