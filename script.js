const selfPortrait = document.querySelector('.self-portrait');
const header = document.querySelector('header');


function changeStyles() {
 
  header.style.backgroundColor = 'lightblue';
  selfPortrait.style.border = '2px solid red';
}


selfPortrait.addEventListener('click', changeStyles);


header.addEventListener('mouseover', () => {

  header.style.color = 'purple';
});


function showAlert() {
  alert('Hello! This is an interactive element.');
}

selfPortrait.addEventListener('click', showAlert);
header.addEventListener('mouseover', showAlert);
