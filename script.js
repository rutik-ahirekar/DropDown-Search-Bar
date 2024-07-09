document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownText = document.querySelector('.dropdown-text');
    const dropdownList = document.querySelector('.dropdown-list');
    const dropdownItems = document.querySelectorAll('.dropdown-list-item');
    const searchInput = document.getElementById('Search-input');

    
    dropdownText.addEventListener('click', function() {
        dropdown.classList.toggle('active');
    });

    
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            dropdownText.querySelector('span').textContent = this.textContent;
            searchInput.placeholder = `Search in ${this.textContent}`;
            dropdown.classList.remove('active');
        });
    });

    
    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('active');
        }
    });
});
