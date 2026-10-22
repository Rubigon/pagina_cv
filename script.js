const exp_academica = [
  {
    "titulo": "GS Desarrollo de Aplicaciones Web",
    "periodo": "2025-27",
    "centro": "CPR Afundación A Coruña"
  },
  {
    "titulo": "Bachiller",
    "periodo": "2023-25",
    "centro": "IES As Mariñas"
  }
];

const exp_profesional = [
  {
    "titulo": "Mozo de almacén",
    "periodo": "2025",
    "empresa": "Empresa Tecnológica"
  }
  
];

function renderCV() {
  const containerAcademica = document.getElementById('exp-academica');
  const containerProfesional = document.getElementById('exp-profesional');

  exp_academica.forEach(item => {
    const card = document.createElement('div');
    card.className = 'cv-item';
    card.innerHTML = `
      <h3>${item.titulo}</h3>
      <span class="periodo">${item.periodo}</span>
      <p class="centro">${item.centro}</p>
    `;
    containerAcademica.appendChild(card);
  });

  exp_profesional.forEach(item => {
    const card = document.createElement('div');
    card.className = 'cv-item';
    card.innerHTML = `
      <h3>${item.titulo}</h3>
      <span class="periodo">${item.periodo}</span>
      <p class="empresa">${item.empresa}</p>
    `;
    containerProfesional.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderCV);
