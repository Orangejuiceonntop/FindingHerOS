var currentTime = new Date().toLocaleString();
var timeText = document.querySelector("#timeElement");
timeText.innerHTML = currentTime
setInterval(function() {
    document.querySelector("#timeElement").innerHTML = new Date().toLocaleString();
}, 1000);

dragElement(document.getElementById("welcome"));
dragElement(document.querySelector('#notes'))

function dragElement(element) {
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = startDragging;
    element.userSelect = "none";
  } else {
    element.onmousedown = startDragging;
  }
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }
  function dragElement(e) {
    e = e || window.event;
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

var welcomeScreen = document.querySelector("#welcome")
function closeWindow(element) {
  element.style.display = "none"
}
function openWindow(element) {
  element.style.display = "block"
}
  var welcomeScreenClose = document.querySelector("#welcomeclose")
  var welcomeScreenOpen = document.querySelector("#welcomeopen")
welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});
welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
})

var selectedIcon= undefined
function selectIcon(element) {
  element.classList.add("selected");
  selectedIcon = element
}
function deselectIcon(element) {
  element.classList.remove("selected");
  selectedIcon = undefined
}
function handleIconTap(element) {
  if (element.classList.contains("selected")) {
    deselectIcon(element)
    openWindow(window)
  } else {
    selectIcon(element)
  }
}

var notesScreen = document.querySelector('#notes')
var notesScreenClose = document.querySelector('#notesclose')
notesScreenClose.addEventListener("click", () => closeWindow(notesScreen));
var notesScreenOpen = document.querySelector('#notesopen')
notesScreenOpen.addEventListener("click", () => openWindow(notesScreen))

var biggestIndex = 1;
function addWindowTapHandling(element) {
  element.addEventListener("mousedown", () => handleWndowTap(element))
}
function handleWindowTap(element) {
  biggestIndex++; // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex
}
function openWindow(element) {
  element.style.display = "block";
  biggestIndex++; // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
}

var topBar = document.querySelector("#top")
function openWindow(element) {
  element.style.display = "block";
  biggestIndex++; // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1
}
function handleWindowTap(element) {
  biggestIndex++; // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1
  deselectIcon(selectedIcon)
}

function initializeWindow(notes) {
  var screen = document.querySelector("#" + elementName)
  addWindowTapHandling(notesScreen)
  makeCloseable(elementname)
  dragElement(notesScreen)
}

function initializeWindow(welcomeScreen) {
  var screen = document.querySelector("#" + elementName)
  addWindowTapHandling(windowScreen)
  makeCloseable(elementname)
  dragElement(windowScreen)
}