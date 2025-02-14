document.addEventListener('DOMContentLoaded', function () {
    const nameModal = document.getElementById('name-modal');
    const locationModal = document.getElementById('location-modal');
    const nameInput = document.getElementById('name-input');
    const nameSubmit = document.getElementById('name-submit');
    const correctNames = ['khắc du', 'anh du', 'du nguyen', 'du'];
    
    // Show name modal when 'Địa điểm nè' button is clicked
    document.querySelector('.location-button').addEventListener('click', function () {
        nameModal.style.display = 'block';
    });

    // Validate name input
    nameInput.addEventListener('input', function () {
        if (correctNames.includes(nameInput.value.trim().toLowerCase())) {
            nameSubmit.classList.remove('disabled');
            nameSubmit.disabled = false;
        } else {
            nameSubmit.classList.add('disabled');
            nameSubmit.disabled = true;
        }
    });

    // Show location modal if the correct name is entered
    nameSubmit.addEventListener('click', function () {
        nameModal.style.display = 'none';
        locationModal.style.display = 'block';
    });

    // Close the location modal
    document.querySelector('.close').onclick = function () {
        locationModal.style.display = 'none';
    };

    // Close modals when clicking outside of them
    window.onclick = function (event) {
        if (event.target === nameModal) {
            nameModal.style.display = 'none';
        } else if (event.target === locationModal) {
            locationModal.style.display = 'none';
        }
    };
});
