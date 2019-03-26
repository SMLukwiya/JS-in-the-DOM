// Function to modify the text content of the paragraph
const changeText = () => {
    const p = document.querySelector('p');

    p.textContent = "I changed because of an event handler Listener.";
}
//Listen for the click event
const button=document.querySelector('button')
button.addEventListener('click', changeText);
