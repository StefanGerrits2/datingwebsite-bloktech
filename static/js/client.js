console.log('Hello world!');

/* Source used: https://github.com/cmda-bt/be-course-18-19/blob/master/examples/mongodb-server/static/index.js */
var remove = document.getElementById('remove');

if (remove) {
  remove.addEventListener('click', onremove);
}

function onremove(e) {
  var node = e.target;
  var id = node.dataset.id;
  var res = new XMLHttpRequest();

  res.open('DELETE', '/' + id);
  res.onload = onload;
  res.send();

  function onload() {
    if (res.status !== 200) {
      throw new Error('Could not delete!');
    }
    else {
      window.location = '/myclub';
    }
  } 
}

// Frontend Enhancement
var body = document.querySelector('body'); 
body.classList.toggle('js-enabled'); // If Javascript is enabled, add class js-enabled on body

// Forms
var form1 = document.querySelector('.form1');
var form2 = document.querySelector('.form2');
var form3 = document.querySelector('.form3');

// Step menu
var step1 = document.querySelector('#step1');
var step2 = document.querySelector('#step2');
var step3 = document.querySelector('#step3');

// Setting active step
step1.classList.toggle('active');
step2.classList.toggle('inactive');
step3.classList.toggle('inactive');

// Show forms 'next'

// Next buttons
var next1 = document.querySelector('.volgende1');
var next2 = document.querySelector('.volgende2');

// Setting active form
form1.classList.toggle('show');
form2.classList.toggle('hide');
form3.classList.toggle('hide');

// Show form 2
function showform2(){
  event.preventDefault();
  form1.classList.replace('show', 'hide');
  form2.classList.replace('hide', 'show');
  form3.classList.replace('show', 'hide');
  step1.classList.replace('active', 'inactive');
  step2.classList.replace('inactive', 'active');
  step3.classList.replace('active', 'inactive');
}

next1.addEventListener('click', showform2, false);
step2.addEventListener('click', showform2, false);

// Show form 3
function showform3(){
  event.preventDefault();
  form1.classList.replace('show', 'hide');
  form2.classList.replace('show', 'hide');
  form3.classList.replace('hide', 'show');
  step1.classList.replace('active', 'inactive');
  step2.classList.replace('active', 'inactive');
  step3.classList.replace('inactive', 'active');
}

next2.addEventListener('click', showform3, false);
step3.addEventListener('click', showform3, false);

// Show forms 'previous'

// Previous buttons
var previous1 = document.querySelector('.vorige1');
var previous2 = document.querySelector('.vorige2');

// Show form 1
function previousform1(){
  event.preventDefault();
  form1.classList.replace('hide', 'show');
  form2.classList.replace('show', 'hide');
  form3.classList.replace('show', 'hide');
  step1.classList.replace('inactive', 'active');
  step2.classList.replace('active', 'inactive');
  step3.classList.replace('active', 'inactive');
}

previous1.addEventListener('click', previousform1, false);
step1.addEventListener('click', previousform1, false);

// Show form 2
function previousform2(){
  event.preventDefault();
  form1.classList.replace('show', 'hide');
  form2.classList.replace('hide', 'show');
  form3.classList.replace('show', 'hide');
  step1.classList.replace('active', 'inactive');
  step2.classList.replace('inactive', 'active');
  step3.classList.replace('active', 'inactive');
}

previous2.addEventListener('click', previousform2, false);
step2.addEventListener('click', previousform2, false);