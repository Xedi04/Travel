let id=new URLSearchParams(window.location.search).get("id");
let divAll=document.querySelector(".p-all");


fetch("http://localhost:3000/Favorites")
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
        divAll.innerHTML+=`
        <div class="p-div4">
        <div class="p-img">
            <img src="${element.image}" alt="">
        </div>
        <h3>${element.name}</h3>
        <p>${element.des}</p>
        <div class="div-btn">
        <button onclick="Deletebox(${element.id})">Delete</button>
      </div>
    </div>
        `
    });
})


function Deletebox(id){
    axios.delete("  http://localhost:3000/Favorites/"+id)
    .then(res=>window.location="./favorites.html")
}