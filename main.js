const main = document.getElementById("main");
//para saber si la pagina cargo
document.addEventListener("DOMContentLoaded",()=>{
    fetchData();//invoco fetch
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
        <article class="barber">
            <img src=${link}>
            <p>${name}</p>
            <input type="date">
            <button>Agendarse</button>
        </article>
        `
    });
main.innerHTML = lista;    
};