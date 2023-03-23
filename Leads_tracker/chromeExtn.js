let myLeads=[]  
//convert frpm array to string : JSON.stringify(arr)
// convert from string to array : JSON.parse(str)
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("del-btn")
const tabBtn=document.getElementById("tab-btn")


const leadsFromLocalStorage=JSON.parse( localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    renderLeads(myLeads)
}



tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify( myLeads ))
    renderLeads(myLeads)
})
})

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    renderLeads(myLeads)
})

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value) //add items int the input bos to array
    inputEl.value = "" //clearing the input box
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads(myLeads)
    console.log(localStorage.getItem("myLeads"))
})

function renderLeads(leads){
let listItems=" "
for(let i=0;i<leads.length;i++){
    listItems+=`<li>
    <a href='${leads[i]}'} target="_blank" >
    ${leads[i]}
    </li>`
    /*
    Another method: 
    const li=document.createElement("li")
    li.textContent=myLeads[i]
    ulEl.append(li)*/
   
}
ulEl.innerHTML=listItems
}
//template strings
/*const name="ISSAC"
const sender="James"
const mail=`
Hi ${name} !
How is is it going?
Cheers ${sender}`

console.log(mail)*/


//console.log(Boolean([0]))

/*function greet(words,name){
    console.log(`${words}, ${name}`)
}
greet("hi","issac")

function get(arr){
    console.log(arr[0])
}
get([998,2,3,]*/

function gen(desc,arr){
    let bs=`The ${arr.length} ${desc} are `
    for(let i=0;i<arr.length;i++){
        bs+=arr[i]+","
    }
    return bs
}

let a = gen("Best persons",["Issac","Beula","Pushpa"])
console.log(a)