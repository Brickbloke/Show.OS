// Select the elements
const welcomeScreen = document.querySelector("#welcome");
const welcomeScreenClose = document.querySelector("#welcomeclose");
const welcomeScreenOpen = document.querySelector("#welcomeopen");
const timeElement = document.querySelector("#timeElement");

// Function to update time
function updateTime() {
    const currentTime = new Date().toLocaleString();
    timeElement.innerHTML = currentTime;
}
setInterval(updateTime, 1000);

// Function to close the window
function closeWindow(element) {
    element.style.display = "none";
}

// Function to open the window
function openWindow(element) {
    element.style.display = "flex";
}

// Event listeners for open and close buttons
welcomeScreenClose.addEventListener("click", () => closeWindow(welcomeScreen));
welcomeScreenOpen.addEventListener("click", () => openWindow(welcomeScreen));

// Make the window draggable
dragElement(welcomeScreen);

function dragElement(element) {
    let initialX = 0, initialY = 0, currentX = 0, currentY = 0;

    element.onmousedown = startDragging;

    function startDragging(e) {
        e.preventDefault();
        initialX = e.clientX;
        initialY = e.clientY;
        document.onmouseup = stopDragging;
        document.onmousemove = dragMouse;
    }

    function dragMouse(e) {
        e.preventDefault();
        currentX = initialX - e.clientX;
        currentY = initialY - e.clientY;
        initialX = e.clientX;
        initialY = e.clientY;
        element.style.top = (element.offsetTop - currentY) + "px";
        element.style.left = (element.offsetLeft - currentX) + "px";
    }

    function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
