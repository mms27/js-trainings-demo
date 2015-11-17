var starImage = document.getElementById('prepaid-star');
var prepaidAccountRadioButton = document.getElementById('account_prepaid');
var trialAccountRadioButton = document.getElementById('account_trial');

toggleStarImage();

prepaidAccountRadioButton.addEventListener('change', toggleStarImage);
trialAccountRadioButton.addEventListener('change', toggleStarImage);

function toggleStarImage() {
    if (prepaidAccountRadioButton.checked === true) {
        starImage.style.display = 'inline';
    } else {
        starImage.style.display = 'none';
    }
}