// ***********Dropdown Menu Using Array************

// const ul=document.getElementById("demo")

// const colors = ['green','black', 'blue'];

// colors.map((item) => {
//   let li= document.createElement("li")
//   li.innerHTML=item
//   ul.appendChild(li)
//   return item
// }
// )


const numbers =[20,45,77,33,2,32,22,99,200,100]
const result = document.getElementById("demo")
// result.innerHTML =numbers.sort()
result.innerHTML =numbers.sort(function (a,b){
    return a-b
})