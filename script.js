const media = [

{
image:"images/pictogram.png",
title:"Pictogram",
desc:"Pictogram digunakan sebagai simbol visual untuk membantu pengunjung mengenali fasilitas dan arah dengan cepat."
},

{
image:"images/denah.png",
title:"Denah Kawasan",
desc:"Denah kawasan membantu pengunjung memahami lokasi fasilitas dan jalur wisata."
},

{
image:"images/larangan.png",
title:"Rambu Larangan",
desc:"Media ini berfungsi memberikan informasi mengenai aturan yang harus dipatuhi pengunjung."
},

{
image:"images/logo.png",
title:"Logo",
desc:"Logo merupakan identitas visual Taman Purbakala Kerajaan Sriwijaya."
},

{
image:"images/grapich.png",
title:"Environmental Graphic Design",
desc:"Implementasi media grafis lingkungan untuk meningkatkan pengalaman pengunjung."
}

];

let current = 0;

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");

function openModal(index){

current=index;

modal.style.display="flex";

modalImg.src=media[current].image;

modalTitle.innerHTML=media[current].title;

modalDesc.innerHTML=media[current].desc;

}

function closeModal(){

modal.style.display="none";

}

function changeSlide(step){

current+=step;

if(current>=media.length){

current=0;

}

if(current<0){

current=media.length-1;

}

modalImg.src=media[current].image;
modalTitle.innerHTML=media[current].title;
modalDesc.innerHTML=media[current].desc;

}

modal.addEventListener("click",function(e){

if(e.target===modal){

closeModal();

}

});