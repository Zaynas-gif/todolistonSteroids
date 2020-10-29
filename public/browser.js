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
let userImput = prompt("Enter your desired new text", e.target.parentelement.parentElement.querySelector(".item-text").innerHTML)
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