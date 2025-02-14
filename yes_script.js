document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('name-input');
    const nameSubmit = document.getElementById('name-submit');
    const locationBox = document.getElementById('location-box');
    const correctNames = ['khắc du', 'anh du', 'du nguyen'];

    nameInput.addEventListener('input', function () {
        if (correctNames.includes(nameInput.value.trim().toLowerCase())) {
            nameSubmit.classList.remove('disabled');
            nameSubmit.disabled = false;
        } else {
            nameSubmit.classList.add('disabled');
            nameSubmit.disabled = true;
        }
    });

    nameSubmit.addEventListener('click', function () {
        document.getElementById('name-box').classList.add('hidden');
        locationBox.classList.remove('hidden');
    });

    const locationBtn = document.querySelector('.location-button');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');

    // Show modal function
    function showLocation() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Close modal function
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Event listeners
    locationBtn.addEventListener('click', showLocation);
    closeBtn.addEventListener('click', closeModal);

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') closeModal();
    });
});
