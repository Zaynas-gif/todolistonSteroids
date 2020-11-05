//Create Feature to reload webpage 
function itemTemplate(item) {
    return `<li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
    <span class="item-text">${item.text}</span>
    <div>
      <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">Edit</button>
      <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">Delete</button>
    </div>
  </li>`
}

//we giving to addevenetlistener 2 methods so when someone submits function will be executed
let createField = document.getElementById("create-field")
document.getElementById("create-form").addEventListener("submit", function (e){
e.preventDefault()
//sends newest data into  database and server sending back to our browser
axios.post('/create-item', {text: createField.value}).then(function (response){
document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data)) 

 }).catch(function (){
     console.log("please try again later.")
 })


 })

document.addEventListener("click", function(e){
//Delete Feature
    if (e.target.classList.contains("delete-me")) {
        if (confirm("Do you really want to delete this item permanently?")) {
            axios.post('/delete-item', {id: e.target.getAttribute("data-id")}).then(function (){
                e.target.parentElement.parentElement.remove()
             }).catch(function (){
                 console.log("please try again later.")
             })
          
        }

    }
    //Uppdate Feature
    //if element with class "edit-me" are clicked  
if (e.target.classList.contains("edit-me")) {
    //make sure that value did not disappear then button "cancel" is clicked.
let userImput = prompt("Enter your desired new text", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML)
 //
 if (userImput) {
    axios.post('/uppdate-item', {text: userImput, id: e.target.getAttribute("data-id")}).then(function (){
        e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput
     }).catch(function (){
         console.log("please try again later.")
     })

 }
}
})