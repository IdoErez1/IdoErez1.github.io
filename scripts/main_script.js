function removeSvgDimensions() {
  // Find all SVG elements in the document
  const svgElements = document.querySelectorAll('svg');
  
  // Process each SVG element
  svgElements.forEach(svg => {
    // Remove width and height attributes
    svg.removeAttribute('width');
    svg.removeAttribute('height');
    
    // Optional: Ensure the SVG has a viewBox if it doesn't already
    if (!svg.hasAttribute('viewBox') && svg.hasAttribute('viewportAttr')) {
      // If viewBox is missing but viewport attributes exist, create one
      const viewBox = svg.getAttribute('viewportAttr');
      svg.setAttribute('viewBox', viewBox);
    }
    
    console.log('Removed dimensions from SVG:', svg);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  removeSvgDimensions();
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
