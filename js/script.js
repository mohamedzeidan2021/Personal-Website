var contactElement = document.getElementById('contactButton');

// Add a mouseover event listener to the button
contactElement.addEventListener('mouseover', () => {
    // Change the background color to #003e80 when hovering
    contactElement.style.backgroundColor = '#003e80';
});

// Add a mouseout event listener to reset the background color
contactElement.addEventListener('mouseout', () => {
    // Change the background color back to its original color when not hovering
    contactElement.style.backgroundColor = '#007bff';
});

var gitElement = document.getElementById('githubButton');

// Add a mouseover event listener to the button
gitElement.addEventListener('mouseover', () => {
    // Change the background color to #003e80 when hovering
    gitElement.style.backgroundColor = '#003e80';
});

// Add a mouseout event listener to reset the background color
gitElement.addEventListener('mouseout', () => {
    // Change the background color back to its original color when not hovering
    gitElement.style.backgroundColor = '#007bff';
});

var aboutElement = document.getElementById('aboutButton');

// Add a mouseover event listener to the button
aboutElement.addEventListener('mouseover', () => {
    // Change the background color to #003e80 when hovering
    aboutElement.style.backgroundColor = '#003e80';
});

// Add a mouseout event listener to reset the background color
aboutElement.addEventListener('mouseout', () => {
    // Change the background color back to its original color when not hovering
    aboutElement.style.backgroundColor = '#007bff';
});


// Add an event listener for the Contact button
document.getElementById('contactButton').addEventListener('click', () => {
    alert('You will now be redirected to my contacts!');
});

// Add an event listener for the Github button
document.getElementById('githubButton').addEventListener('click', () => {
    alert('You clicked the Github button!');
});

// Add an event listener for the About button
document.getElementById('aboutButton').addEventListener('click', () => {
    alert('You clicked the About button!');
});

//have the fade in effect
window.addEventListener("load", () => {
    document.documentElement.classList.add("active");
});