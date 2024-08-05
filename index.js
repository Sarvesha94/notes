



// const notesContainer = document.querySelector(".notes-container");
// const createBtn = document.querySelector(".btn");

// // function showNotes()
// // {
// //     notesContainer.innerHTML= localStorage.getItem("notes");
    
   
// // }

// function showNotes() {
//     const savedNotes = localStorage.getItem("notes");
//     if (savedNotes) {
//         notesContainer.innerHTML = savedNotes;
//     }
// }

// showNotes();

// function updateStorage(){

//     localStorage.setItem("notes", noteContainer.innerHTML);
// }

// createBtn.addEventListener("click", () => {
//     // Create a new note element
//     let inputBox = document.createElement("p");
//     inputBox.className = "input-box"; // Ensure correct class name
//     inputBox.setAttribute("contenteditable", "true");
//     inputBox.setAttribute("placeholder", "Type your note here..."); // Optional: Placeholder text for clarity

//     // Create and append the image
//     let img = document.createElement("img");
//     img.src = "dd.png";
//     img.alt = "Delete Icon"; // Added alt text for accessibility
//     inputBox.appendChild(img);

//     // Append the new note to the notes container
//     notesContainer.appendChild(inputBox);

//     // Optional: Focus the newly created input box
//     inputBox.focus();
//     updateStorage(); 
// });


// notesContainer.addEventListener("click", function(e)
// {
//     if(e.target.tagName== "IMG")
//     {
//         e.target.parentElement.remove();
//         updateStorage();

//     }
//     else if(e.target.tagName === "p")
//     {
//         note = document.querySelectorAll(".input-box");
//         notesContainer.forEach(int=>
//         {
//             nt.onkey=function()
//             {
//                 updateStorage();
//             }
//         }
//         )
//     }
// })


// document.addEventListener("keydown", event =>{
//     if(event.key === "Enter")
//     {
//         document.execCommand("insertLineBreak");
//         event.preventDefault();
//     }
// })






const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Function to load notes from local storage and display them
function showNotes() {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        notesContainer.innerHTML = savedNotes;
    }
}

// Function to save current notes to local storage
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Load notes when the page loads
window.onload = showNotes;

// Create a new note when the button is clicked
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    inputBox.setAttribute("placeholder", "Type your note here...");

    let img = document.createElement("img");
    img.src = "dd.png";
    img.alt = "Delete Icon";
    inputBox.appendChild(img);

    notesContainer.appendChild(inputBox);
    inputBox.focus();
    updateStorage(); // Update storage whenever a new note is created
});

// Event listener for note actions (deleting notes)
notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

// Ensure that Enter key creates a new line within contenteditable elements
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

// Save notes to local storage whenever there is a change
notesContainer.addEventListener("input", updateStorage);
