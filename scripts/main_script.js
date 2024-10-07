document.addEventListener('DOMContentLoaded', function() {
    // Select all dropdown items with a nested list
    var dropdownParents = document.getElementsByClassName('parent-page-dropdown');

    // Convert HTMLCollection to an array and add click event listener to each parent
    Array.from(dropdownParents).forEach(function(parent) {
        parent.addEventListener('click', function(e) {

            // Get the next sibling (the nested <ul>)
            var dropdown = parent.children[1];
            console.log(dropdown)
            // Check if the next sibling exists and is a <ul>
            if (dropdown && dropdown.tagName === 'UL') {
                dropdown.classList.toggle('parent-dropdown-dropdown-visible');
            }
        });
    });
});