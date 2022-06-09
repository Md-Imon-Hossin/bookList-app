
// finding to elements 

const title = document.querySelector("#title");
const author =  document.querySelector("#author");
const year =  document.querySelector("#year");
const button =  document.querySelector(".btn");
const bookList =  document.querySelector("#book-list");

// showing the display book list

button.addEventListener("click",function(event){
    
   event.preventDefault();
//    console.log("button is clicked");
    if(title.value == "" && author.value == "" && year.value == ""){
        alert("Input filled is empty")
       
    }
    else{
        const newRow = document.createElement("tr");

        // creating a new title 
        const newTitle = document.createElement("th");
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        // creating a author
        const newAuthor = document.createElement("th");
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        // creating a new year
        const newYear = document.createElement("th");
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        bookList.appendChild(newRow);
        
    }
    
})