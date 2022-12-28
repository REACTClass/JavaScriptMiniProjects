let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)

    })

})

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = "" // <- clears input field after saving value
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) //set items in local storage and set them as strings
    render(myLeads)


    console.log(localStorage.getItem("myLeads"))
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        // listItems += "<li><a target='_blank' href=' " + myLeads[i] + " '>" + myLeads[i] + "</a></li> " //<-Use += to keep the previous value and use '+ " " to add space between values and use .innerHTML to render html to the page e.g <li></li> to render a list. Use target='_blank' to open page in a new tab.

        listItems += `
    <li>
    <a target='_blank' href= '${leads[i]}' >
     ${leads[i]}
     </a>
    </li>`                                     // <- same as above but with much neater code
    }

    ulEl.innerHTML = listItems
}