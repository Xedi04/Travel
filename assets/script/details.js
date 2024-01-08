let id=new URLSearchParams(window.location.search).get("id");
let divAll=document.querySelector(".p-all");

fetch("http://localhost:3000/TRAVEL/"+id)
.then(res=>res.json())
.then(data=>{
        divAll.innerHTML+=`
        <div class="p-div4">
        <div class="p-img">
            <img src="${data.image}" alt="">
        </div>
        <h3>${data.name}</h3>
        <p>${data.des}</p>
        <div class="div-btn">
        <button >Delete</button>
        <button >Update</button>
        <button>Details</button>
      </div>
    </div>
        `
})