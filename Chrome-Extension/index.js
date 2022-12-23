let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    renderLeads()
})


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = "" // <- clears input field after saving value
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) //set items in local storage and set them as strings
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a target='_blank' href=' " + myLeads[i] + " '>" + myLeads[i] + "</a></li> " //<-Use += to keep the previous value and use '+ " " to add space between values and use .innerHTML to render html to the page e.g <li></li> to render a list. Use target='_blank' to open page in a new tab.

        listItems += `
    <li>
    <a target='_blank' href= '${myLeads[i]}' >
     ${myLeads[i]}
     </a>
    </li>`                                     // <- same as above but with much neater code
    }

    ulEl.innerHTML = listItems
}