let msg = document.querySelector("#biografia");
let bio_b = document.querySelector("#bio_b")
bio_b.addEventListener('click',()=>{
    document.querySelector('#biografia').style.visibility='visible';
    document.querySelector('#fotografies').style.visibility='hidden';
    document.querySelector('#erga').style.visibility='hidden';
    document.querySelector('#sundesmoi').style.visibility='hidden';
    document.querySelector('#diaxeirish').style.visibility='hidden';
})


let msg1 = document.querySelector("#fotografies");
let foto_b = document.querySelector("#foto_b")
foto_b.addEventListener('click',()=>{
    document.querySelector('#biografia').style.visibility='hidden';
    document.querySelector('#fotografies').style.visibility='visible';
    document.querySelector('#erga').style.visibility='hidden';
    document.querySelector('#sundesmoi').style.visibility='hidden';
    document.querySelector('#diaxeirish').style.visibility='hidden';
})

let msg2 = document.querySelector("#erga");
let works_b = document.querySelector("#works_b")
works_b.addEventListener('click', ()=>{
    document.querySelector('#erga').style.visibility='visible';
    document.querySelector('#biografia').style.visibility='hidden';
    document.querySelector('#fotografies').style.visibility='hidden';
    document.querySelector('#sundesmoi').style.visibility='hidden';
    document.querySelector('#diaxeirish').style.visibility='hidden';
})

let msg3 = document.querySelector("#sundesmoi");
let links_b = document.querySelector("#links_b")
links_b.addEventListener('click',()=>{
    document.querySelector('#sundesmoi').style.visibility='visible';
    document.querySelector('#biografia').style.visibility='hidden';
    document.querySelector('#fotografies').style.visibility='hidden';
    document.querySelector('#erga').style.visibility='hidden';
    document.querySelector('#diaxeirish').style.visibility='hidden';
})

let msg4 = document.querySelector("#diaxeirish");
let managment_b = document.querySelector("#managment_b")
managment_b.addEventListener('click',()=>{
    document.querySelector('#diaxeirish').style.visibility='visible';
    document.querySelector('#sundesmoi').style.visibility='hidden';
    document.querySelector('#biografia').style.visibility='hidden';
    document.querySelector('#fotografies').style.visibility='hidden';
    document.querySelector('#erga').style.visibility='hidden';
})

let plirofories = document.querySelector("#plirofories");
let info_b = document.querySelector("#info_b")
info_b.addEventListener('click', ()=>{
    document.querySelector('#plirofories').style.visibility='visible';
    document.querySelector('#vraveia').style.visibility='hidden';
    document.querySelector('#sumvan').style.visibility='hidden';
    document.querySelector('#fotografia1').style.visibility='hidden';
    document.querySelector('#fotografia2').style.visibility='hidden';
    document.querySelector('#fotografia3').style.visibility='hidden';
    document.querySelector('#muthistorimata').style.visibility='hidden';
    document.querySelector('#dih').style.visibility='hidden';
    document.querySelector('#para').style.visibility='hidden';
    document.querySelector('#sun').style.visibility='hidden';
    document.querySelector('#log').style.visibility='hidden';
})

let vraveia = document.querySelector("#vraveia");
let awards_b = document.querySelector("#awards_b")
awards_b.addEventListener('click', ()=>{
    document.querySelector('#vraveia').style.visibility='visible';
    document.querySelector('#plirofories').style.visibility='hidden';
    document.querySelector('#sumvan').style.visibility='hidden';
    document.querySelector('#fotografia1').style.visibility='hidden';
    document.querySelector('#fotografia2').style.visibility='hidden';
    document.querySelector('#fotografia3').style.visibility='hidden';
    document.querySelector('#muthistorimata').style.visibility='hidden';
    document.querySelector('#dih').style.visibility='hidden';
    document.querySelector('#para').style.visibility='hidden';
    document.querySelector('#sun').style.visibility='hidden';
    document.querySelector('#log').style.visibility='hidden';
})

let sumvan = document.querySelector("#sumvan");
let incident_b = document.querySelector("#incident_b")
incident_b.addEventListener('click', ()=>{
    document.querySelector('#sumvan').style.visibility='visible';
    document.querySelector('#plirofories').style.visibility='hidden';
    document.querySelector('#vraveia').style.visibility='hidden';
    document.querySelector('#fotografia1').style.visibility='hidden';
    document.querySelector('#fotografia2').style.visibility='hidden';
    document.querySelector('#fotografia3').style.visibility='hidden';
    document.querySelector('#muthistorimata').style.visibility='hidden';
    document.querySelector('#dih').style.visibility='hidden';
    document.querySelector('#para').style.visibility='hidden';
    document.querySelector('#sun').style.visibility='hidden';
    document.querySelector('#log').style.visibility='hidden';
})

let fotografia1 = document.querySelector("#fotografia1");
let foto1 = document.querySelector("#foto1")
foto1.addEventListener('click', ()=>{
    document.querySelector('#fotografia1').style.visibility='visible';
    document.querySelector('#plirofories').style.visibility='hidden';
    document.querySelector('#vraveia').style.visibility='hidden';
    document.querySelector('#sumvan').style.visibility='hidden';
    document.querySelector('#fotografia2').style.visibility='hidden';
    document.querySelector('#fotografia3').style.visibility='hidden';
    document.querySelector('#muthistorimata').style.visibility='hidden';
    document.querySelector('#dih').style.visibility='hidden';
    document.querySelector('#para').style.visibility='hidden';
    document.querySelector('#sun').style.visibility='hidden';
    document.querySelector('#log').style.visibility='hidden';
})

let fotografia2 = document.querySelector("#fotografia2");
let foto2 = document.querySelector("#foto2")
foto2.addEventListener('click', ()=>{
    document.querySelector('#plirofories').style.visibility='hidden';
    document.querySelector('#vraveia').style.visibility='hidden';
    document.querySelector('#sumvan').style.visibility='hidden';
    document.querySelector('#fotografia1').style.visibility='hidden';
    document.querySelector('#fotografia2').style.visibility='visible';
    document.querySelector('#fotografia3').style.visibility='hidden';
    document.querySelector('#muthistorimata').style.visibility='hidden';
    document.querySelector('#dih').style.visibility='hidden';
    document.querySelector('#para').style.visibility='hidden';
    document.querySelector('#sun').style.visibility='hidden';
    document.querySelector('#log').style.visibility='hidden';
})

let fotografia3 = document.querySelector("#fotografia3");
let foto3 = document.querySelector("#foto3")
foto3.addEventListener('click', ()=>{
    document.querySelector('#fotografia3').style.visibility='visible';
    document.querySelector('#plirofories').style.visibility='hidden';
    document.querySelector('#vraveia').style.visibility='hidden';
    document.querySelector('#sumvan').style.visibility='hidden';
    document.querySelector('#fotografia1').style.visibility='hidden';
    document.querySelector('#fotografia2').style.visibility='hidden';
    document.querySelector('#muthistorimata').style.visibility='hidden';
    document.querySelector('#dih').style.visibility='hidden';
    document.querySelector('#para').style.visibility='hidden';
    document.querySelector('#sun').style.visibility='hidden';
    document.querySelector('#log').style.visibility='hidden';
})

let muthistorimata = document.querySelector("#muthistorimata");
let myth = document.querySelector("#myth")
myth.addEventListener('click', ()=>{
    document.querySelector('#muthistorimata').style.visibility='visible';
    document.querySelector('#plirofories').style.visibility='hidden';
    document.querySelector('#vraveia').style.visibility='hidden';
    document.querySelector('#sumvan').style.visibility='hidden';
    document.querySelector('#fotografia1').style.visibility='hidden';
    document.querySelector('#fotografia2').style.visibility='hidden';
    document.querySelector('#fotografia3').style.visibility='hidden';
    document.querySelector('#dih').style.visibility='hidden';
    document.querySelector('#para').style.visibility='hidden';
    document.querySelector('#sun').style.visibility='hidden';
    document.querySelector('#log').style.visibility='hidden';
})

let dih = document.querySelector("#dih");
let dihghmata = document.querySelector("#dihghmata")
dihghmata.addEventListener('click', ()=>{
    document.querySelector('#dih').style.visibility='visible';
    document.querySelector('#plirofories').style.visibility='hidden';
    document.querySelector('#vraveia').style.visibility='hidden';
    document.querySelector('#sumvan').style.visibility='hidden';
    document.querySelector('#fotografia1').style.visibility='hidden';
    document.querySelector('#fotografia2').style.visibility='hidden';
    document.querySelector('#fotografia3').style.visibility='hidden';
    document.querySelector('#muthistorimata').style.visibility='hidden';
    document.querySelector('#para').style.visibility='hidden';
    document.querySelector('#sun').style.visibility='hidden';
    document.querySelector('#log').style.visibility='hidden';
})

let para = document.querySelector("#para");
let paramythia = document.querySelector("#paramythia")
paramythia.addEventListener('click', ()=>{
    document.querySelector('#para').style.visibility='visible';
    document.querySelector('#plirofories').style.visibility='hidden';
    document.querySelector('#vraveia').style.visibility='hidden';
    document.querySelector('#sumvan').style.visibility='hidden';
    document.querySelector('#fotografia1').style.visibility='hidden';
    document.querySelector('#fotografia2').style.visibility='hidden';
    document.querySelector('#fotografia3').style.visibility='hidden';
    document.querySelector('#muthistorimata').style.visibility='hidden';
    document.querySelector('#dih').style.visibility='hidden';
    document.querySelector('#sun').style.visibility='hidden';
    document.querySelector('#log').style.visibility='hidden';
})

let sun = document.querySelector("#sun");
let link = document.querySelector("#link")
link.addEventListener('click', ()=>{
    document.querySelector('#sun').style.visibility='visible';
    document.querySelector('#plirofories').style.visibility='hidden';
    document.querySelector('#vraveia').style.visibility='hidden';
    document.querySelector('#sumvan').style.visibility='hidden';
    document.querySelector('#fotografia1').style.visibility='hidden';
    document.querySelector('#fotografia2').style.visibility='hidden';
    document.querySelector('#fotografia3').style.visibility='hidden';
    document.querySelector('#muthistorimata').style.visibility='hidden';
    document.querySelector('#dih').style.visibility='hidden';
    document.querySelector('#para').style.visibility='hidden';
    document.querySelector('#log').style.visibility='hidden';
})

let log = document.querySelector("#log");
let login = document.querySelector("#login")
login.addEventListener('click', ()=>{
    document.querySelector('#log').style.visibility='visible';
    document.querySelector('#sun').style.visibility='hidden';
    document.querySelector('#plirofories').style.visibility='hidden';
    document.querySelector('#vraveia').style.visibility='hidden';
    document.querySelector('#sumvan').style.visibility='hidden';
    document.querySelector('#fotografia1').style.visibility='hidden';
    document.querySelector('#fotografia2').style.visibility='hidden';
    document.querySelector('#fotografia3').style.visibility='hidden';
    document.querySelector('#muthistorimata').style.visibility='hidden';
    document.querySelector('#dih').style.visibility='hidden';
    document.querySelector('#para').style.visibility='hidden';
})