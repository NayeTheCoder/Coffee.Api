function hotDrinks(hotdrinks) {

  const parent = document.getElementById('hot-parent');
  for ( let i =0; i < hotdrinks.length; i++) {
      let hotDrink = hotdrinks[i];
      var item = document.createElement('div');
      item.classList.add('col');
      item.innerHTML = `
      <div class="card">
          <img src="${hotDrink.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${hotDrink.title}</h5>
            <p class="card-text"> ${hotDrink.description}</p>
          </div>
        </div>
      `;
      parent.appendChild(item);
  }
}
function coldDrinks(coldDrinks) {
  
  const parent = document.getElementById('iced-parent');
  for ( let i =0; i < coldDrinks.length; i++) {
      let coldDrink = coldDrinks[i];
      var item = document.createElement('div');
      item.classList.add('col');
      item.innerHTML = `
      <div class="card">
          <img src="${coldDrink.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${coldDrink.title}</h5>
            <p class="card-text"> ${coldDrink.description}</p>
          </div>
        </div>
      `;
      parent.appendChild(item);
  }}

  if (document.getElementById("iced-parent") != null){
    fetch('https://api.sampleapis.com/coffee/iced')
    .then(response => response.json())
    .then(data => {console.log(data);
    coldDrinks(data);
  });
  }
  else if (document.getElementById("hot-parent") != null){
    fetch('https://api.sampleapis.com/coffee/hot')
  .then(response => response.json())
  .then(data => { 
  console.log(data);
  hotDrinks(data);
  });
  }
