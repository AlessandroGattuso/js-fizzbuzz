let container = document.getElementById('container');

for(let i = 1; i <= 100; i++){
  
  if(!(i%3) && !(i%5))
    container.innerHTML +=  `<div class="box both-box">FizzBuzz</div>`;

  else if(!(i%3))
    container.innerHTML +=  `<div class="box fizz-box">Fizz</div>`;

  else if(!(i%5))
    container.innerHTML +=  `<div class="box buzz-box">Buzz</div>`;

  else
    container.innerHTML +=  `<div class="box">${i}</div>`;

}