function Myfunction() {


    let e = document.getElementById("search-input").value;

    if (e == 0) {
        
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => {
                let tb_body = "";
                json.map((values) => {
                    tb_body += `<tr>
<td> ${values.title} </td>
<td> ${values.description} </td>
<td> ${values.price} </td>
<td> <img src=" ${values.image}" / </td>
<td> ${values.rating.rate} </td>
<td> ${values.rating.count} </td>
</tr>`

                })
                document.getElementById("tdata").innerHTML = tb_body

            })

    } else {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => {
                let tb_body = "";
                json.filter((values) => {
                    if (e == values.id) {

                        tb_body += `<tr>
    <td> ${values.title} </td>
    <td> ${values.description} </td>
    <td> ${values.price} </td>
    <td> <img src=" ${values.image}" / </td>
    <td> ${values.rating.rate} </td>
    <td> ${values.rating.count} </td>
    </tr>`
                    }

                })
                document.getElementById("tdata").innerHTML = tb_body

            })





    }

}



Myfunction();




// function SearchById(id, field = "search-input") {
//     if (id === "") return json;

//     return json.filter(value => {
//         if(id.split(',').length > 0) {
//             const ids = id.split(',');
//             return ids.indexOf(value[field]) !== -1;
//         }
//         return value[field] === id;
//     });
// }







// fetch("https://fakestoreapi.com/products")
//     .then((res) => res.json())
//     .then((json) => {
//         let tb_body = "";
//         json.map((values) => {
//             tb_body += `<tr>
// <td> ${values.title} </td>
// <td> ${values.description} </td>
// <td> ${values.price} </td>
// <td> <img src=" ${values.image}" / </td>
// <td> ${values.rating.rate} </td>
// <td> ${values.rating.count} </td>
//     </tr>`

//         })
//         document.getElementById("tdata").innerHTML = tb_body

//     })