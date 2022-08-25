// https://calculator.swiftutors.com/tangent-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const tangentAngleRadio = document.getElementById('tangentAngleRadio');
const oppositeAngleRadio = document.getElementById('oppositeAngleRadio');
const adjacentAngleRadio = document.getElementById('adjacentAngleRadio');

let tangentAngle;
let oppositeAngle = v1;
let adjacentAngle = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

tangentAngleRadio.addEventListener('click', function() {
  variable1.textContent = 'Opposite Angle';
  variable2.textContent = 'Adjacent Angle';
  oppositeAngle = v1;
  adjacentAngle = v2;
  result.textContent = '';
});

oppositeAngleRadio.addEventListener('click', function() {
  variable1.textContent = 'Tangent Angle';
  variable2.textContent = 'Adjacent Angle';
  tangentAngle = v1;
  adjacentAngle = v2;
  result.textContent = '';
});

adjacentAngleRadio.addEventListener('click', function() {
  variable1.textContent = 'Tangent Angle';
  variable2.textContent = 'Opposite Angle';
  tangentAngle = v1;
  oppositeAngle = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(tangentAngleRadio.checked)
    result.textContent = `Tangent Angle = ${computeTangentAngle().toFixed(2)}`;

  else if(oppositeAngleRadio.checked)
    result.textContent = `Opposite Angle = ${computeOppositeAngle().toFixed(2)}`;

  else if(adjacentAngleRadio.checked)
    result.textContent = `Adjacent Angle = ${computeAdjacentAngle().toFixed(2)}`;
})

// calculation

function computeTangentAngle() {
  return Number(oppositeAngle.value) / Number(adjacentAngle.value);
}

function computeOppositeAngle() {
  return Number(tangentAngle.value) * Number(adjacentAngle.value);
}

function computeAdjacentAngle() {
  return Number(oppositeAngle.value) / Number(tangentAngle.value);
}