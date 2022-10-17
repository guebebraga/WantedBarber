const main = document.getElementById("main");

document.addEventListener("DOMContentLoaded",()=>{
    fetchData();
});

const fetchData= async()=>{
try{
    const res = await fetch('./data.json');
    const data = await res.json();
    showImage(data);
    console.log(data);
}
catch(error){
    console.log(error);
}

};

const showImage =(Jsn)=>{
    let lista="";

    Jsn.forEach(({link ,name}) => {
        lista+=`
        <div class="barber">
            <img src=${link}>
            <p>${name}</p>
            <input type="date">
            <button>Agendarse</button>
        </div>
        `
    });
main.innerHTML = lista;


  
    
};