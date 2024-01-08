let divAll=document.querySelector(".p-all");
let sortBtn=document.querySelector("#sort");
let sorted="as";
let filterArray=[];

function Show(){
fetch("http://localhost:3000/TRAVEL")
.then(res=>res.json())
.then(data=>{
    divAll.innerHTML=""
    filterArray=filterArray.length?filterArray:data;
    filterArray.forEach(element => {
        divAll.innerHTML+=`
        <div class="p-div4">
        <div class="p-img">
            <img src="${element.image}" alt="">
        </div>
        <h3>${element.name}</h3>
        <p>${element.des}</p>
        <div class="div-btn">
        <button onclick="Deletebox(${element.id})">Delete</button>
        <button onclick="Update(${element.id})">Update</button>
        <button onclick="Details(${element.id})">Details</button>
        <button onclick="Fav(${element.id})">Favorites</button>
      </div>
    </div>
        `
    });
})
}
Show();

sortBtn.addEventListener("click", ()=>{
    if(sorted==="as"){
        filterArray.sort((a, b) => a.name.localeCompare(b.name));
        sorted="des";
        sortBtn.innerHTML="SORT ASC"
    }else if(sorted==="des"){
        filterArray.sort((a, b) => b.name.localeCompare(a.name));
        sorted="def";
        sortBtn.innerHTML="SORT DSC"
    }else{
        filterArray=[]
        sorted="as";
        sortBtn.innerHTML="SORT"
    }
    Show();
})

function Deletebox(id){
    axios.delete("  http://localhost:3000/TRAVEL/"+id)
    .then(res=>window.location="./index.html")
}

function Details(id){
    window.location=`./details.html?id=${id}`
}

function Update(id){
    window.location=`./update.html?id=${id}`
}

function Fav(id){
    axios.get("http://localhost:3000/TRAVEL/"+id)
    .then(res=>{
        axios.post("http://localhost:3000/Favorites", res.data)
        window.location=`./favorites.html`;
    })
    }