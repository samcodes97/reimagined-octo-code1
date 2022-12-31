const posts = [    
    {title: 'Sam', body:'body1'} , 
    {title: 'Tanu', body: 'body2'}
]

function getPosts(){
setTimeout(()=> {
let show=""
posts.forEach((value)=>{
show += `<li> ${value.title} </li>`
})
document.getElementById("demo").innerHTML=show
},2000)
}

function createPost(value) {
setTimeout(()=> {
posts.push(value)
getPosts()
},3000)}
createPost({title:"Jedi" ,body:"body3"})
