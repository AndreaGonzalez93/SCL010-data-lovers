//DOM
function init() {
  let characterData = window.loadData();
  for (let i = 0; i < 42; i++) {
   // for (i = 0; i < characterData.length; i++) {
    document.getElementById('characters').innerHTML += `
      <div class="card">
        <img src="${characterData[i].image}" alt="">
        <h3>${characterData[i].name}</h3>
        <p>Especie: ${characterData[i].species}</p>
        <p class="percent">Porcentaje aparación: ${window.calculePercent(characterData[i].episode.length)}%.</p>
      </div>`;
  }
}
init();

//FILTRADO ASCENDENTE Y DESCENDENTE
const selectOrder=document.getElementById('order');
   selectOrder.addEventListener('change',()=>{
    let data = window.loadData();
    let option = selectOrder.value;
    let characterData = window.orderData(data, option);
    let htmlForInyect='';
    //for (let i = 0; i < 30; i++) {
    for (let i = 0; i < characterData.length; i++) {
       htmlForInyect+= `
         <div class="card">
           <img src="${characterData[i].image}" alt="">
           <h3>${characterData[i].name}</h3>
           <p>Especie: ${characterData[i].species}</p>
           <p class="percent">Porcentaje aparación: ${window.calculePercent(characterData[i].episode.length)}%.</p>
         </div>`;
     }
     document.getElementById('characters').innerHTML = htmlForInyect;
   });



//filtrado por especie
const filterSpices = document.getElementById('specie');
  filterSpices.addEventListener('change',() =>{
    let characterData = window.filterSpecies(window.loadData(),filterSpices.value);
    document.getElementById("characters").innerHTML="";
    for (let i = 0; i < characterData.length; i++) {
    document.getElementById('characters').innerHTML += `
      <div class="card">
        <img src="${characterData[i].image}" alt="">
        <h3>${characterData[i].name}</h3>
        <p>Especie: ${characterData[i].species}</p>
        <p class="percent">Porcentaje aparación: ${window.calculePercent(characterData[i].episode.length)}%.</p>
      </div>`;
      }
   });

//filtrado por genero
   const filterGender = document.getElementById('gender');
   filterGender.addEventListener('change',() =>{
     let characterData = window.filterGenders(window.loadData(),filterGender.value);
     document.getElementById("characters").innerHTML="";
     for (let i = 0; i < characterData.length; i++) {
     document.getElementById('characters').innerHTML += `
       <div class="card">
         <img src="${characterData[i].image}" alt="">
         <h3>${characterData[i].name}</h3>
         <p>Status: ${characterData[i].gender}</p>
         <p class="percent">Porcentaje aparación: ${window.calculePercent(characterData[i].episode.length)}%.</p>
       </div>`;
   }});

   //filtrado por estado

   const selectStatus = document.getElementById('status');
   selectStatus.addEventListener('change',() =>{
     let characterData = window.filterStatus(window.loadData(),selectStatus.value);
     document.getElementById("characters").innerHTML="";
     for (let i = 0; i < characterData.length; i++) {
     document.getElementById('characters').innerHTML += `
       <div class="card">
         <img src="${characterData[i].image}" alt="">
         <h3>${characterData[i].name}</h3>
         <p>Status: ${characterData[i].status}</p>
         <p class="percent">Porcentaje aparación: ${window.calculePercent(characterData[i].episode.length)}%.</p>
       </div>`;
   }});
