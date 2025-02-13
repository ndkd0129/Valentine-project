document.addEventListener('DOMContentLoaded', () => {
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