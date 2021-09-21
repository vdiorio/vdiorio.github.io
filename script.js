const invisibleMenu = document.querySelector('.invisible')
const menuButton = document.querySelector('.container')

function transformButton() {
  menuButton.classList.toggle("change");
  invisibleMenu.classList.toggle("invisible")
}

function createProjectCard({ title, html_url}) {
  const name = title.split('] ')[1]
  const link = html_url;
  const newCard = document.createElement('div');
  newCard.innerText = name;
  newCard.className = 'small-card'
  newCard.addEventListener('click', function() {
    location.href = link;
}, false);
  document.querySelector('#project-cards').appendChild(newCard);
}

function getVitorPullRequests() {
  return fetch('https://api.github.com/search/issues?q=state%3Aopen+author%3Avdiorio+type%3Apr')
  .then((response) => response.json())
  .then((object) => object.items.forEach((project) =>{
    createProjectCard(project);
  }));
}

function createLoadingElement(){
  
}

function deleteLoadingElement(){
  
}

async function loadProjects() {
  createLoadingElement();
  await getVitorPullRequests();
  deleteLoadingElement();
}

window.onload = () => {
  loadProjects();
}