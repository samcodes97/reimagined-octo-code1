const posts = [

    { title: "Sam", body: "body one" },
    { title: "Tanu", body: "body two" }
]

function getPosts() {
    setTimeout(() => {
        let show = ""
        posts.forEach((value) => {
            show += `<li> ${value.title}</li> `
        })
        document.getElementById("demo").innerHTML = show
    }, 2000)
}
]
function createPost(value) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => { 

            posts.push(value)
            let status = true;

            if (!status) resolve();
            else reject('Error : Something went wrong');
        }, 2000);
       
    })
    return promise
}

createPost({ title: "Jedi", body: "body three" }).then(getPosts).catch((err) => console.log(err));

