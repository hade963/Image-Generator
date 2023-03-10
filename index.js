
const details = {
  hair: [
    'bang',
    'curls',
    'default',
    'elegant',
    'fancy',
    'quiff',
    'short',
  ],
  ears: [
    'default',
    'tilt-backward',
    'tilt-forward',
  ],
  eyes: [
    'angry',
    'default',
    'naughty',
    'panda',
    'smart',
    'star',
  ],
  mouth: [
    'astonished',
    'default',
    'eating',
    'laugh',
    'tongue',
  ],
  neck: [
    'bend-backward',
    'bend-forward',
    'default',
    'thick',
  ],
  leg: [
    'bubble-tea',
    'cookie',
    'default',
    'game-console',
    'tilt-backward',
    'tilt-forward',
  ],
  accessories: [
      'earings',
      'flower',
      'glasses',
      'headphone'],
  backgrounds: [
      'blue50',
      'blue60',
      'blue70',
      'darkblue30',
      'darkblue50',
      'darkblue70',
      'green50',
      'green60',
      'green70',
      'grey40',
      'grey70',
      'grey80',
      'red50',
      'red60',
      'red70',
      'yellow50',
      'yellow60',
      'yellow70',
    ],
}

function createCustimzations(obj) {
  const custom = document.querySelector('.custom');

  const ul = document.createElement('ul');

  for(const [key] of Object.entries(obj)) {
    const li = document.createElement('li');
    li.addEventListener('click', handleCustomClick);

    li.innerText = key;
    li.dataset.name = key;
    ul.appendChild(li);
  }

  custom.appendChild(ul);

}


function handleCustomClick(e) {
  if(!e.target.classList.contains('active')) { 
  let stylesNames = details[e.target.dataset.name];
  createStyles(stylesNames);

  Array.from(e.target.parentNode.querySelectorAll('li')).forEach(li => { 
    if(li === e.target) { 
      li.classList.add('active');
    }
    else { 
      li.classList.remove('active');
    }
  });
}
}

function createStyles(stylesNames) { 
  const styles = document.querySelector('.styles');
  const ul = document.querySelector('.styles ul');
  ul.innerHTML = '';
  stylesNames.forEach(style=> { 
    let li = document.createElement('li');
    li.innerText = style;
    li.dataset.name = style;
    li.addEventListener('click', handleStyleClick);
    ul.appendChild(li);
  });
  
  styles.appendChild(ul);
}

function handleStyleClick(e) {
  if(!e.target.classList.contains('active')) { 
    const activeCustom = document.querySelector('.custom .active');
    Array.from(e.target.parentNode.querySelectorAll('li')).forEach(li => { 

      if(li === e.target) { 
        li.classList.add('active');
      }
      else { 
        li.classList.remove('active');
      }
    })
    createImage(activeCustom.dataset.name, e.target.dataset.name);
  }

}

const Background = document.querySelector('.image');
const ears = document.querySelector('.ears-img');
const eyes = document.querySelector('.eyes-img');
const hair = document.querySelector('.hair-img');
const accessories = document.querySelector('.accessories-img');
const neck = document.querySelector('.neck-img');
const leg = document.querySelector('.leg-img');
const mouth = document.querySelector('.mouth-img');
const nose = document.querySelector('.nose-img');

function createImage(folder, file) {
  const imgSrc = './alpaca/'+ folder + "/"+ file + '.png';
  if(folder === 'hair') { 
    hair.src = imgSrc;
  }
  else if(folder === 'leg') { 
    leg.src = imgSrc;
  }
  else if(folder === 'eyes') { 
    eyes.src = imgSrc;
  }
  else if(folder === 'neck') { 
    neck.src = imgSrc;
  } 
  else if(folder === 'accessories') { 
    accessories.src = imgSrc;
  }
  else if(folder === 'ears') {
    ears.src = imgSrc;
  }
  else if(folder === 'backgrounds') { 
    Background.style.backgroundImage = `url('${imgSrc}')`;
    Background.dataset.name = file;
  }
  else if(folder === 'mouth') { 
    mouth.src = imgSrc;
  }
  }


// createImage(currentStyles);
createCustimzations(details);


const download = document.querySelector('.download');

download.addEventListener('click', function(e) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 300;
  canvas.height = 300;

  /*
const Background = document.querySelector('.image');
const ears = document.querySelector('.ears-img');
const eyes = document.querySelector('.eyes-img');
const hair = document.querySelector('.hair-img');
const accessories = document.querySelector('.accessories-img');
const neck = document.querySelector('.neck-img');
const leg = document.querySelector('.leg-img');
const mouth = document.querySelector('.mouth-img');
   */
  const backgroundImage = new Image();
  backgroundImage.src = './alpaca/backgrounds/' + Background.dataset.name + '.png';
  backgroundImage.onload = function() {
    ctx.drawImage(this, 0, 0, 300, 300);
    ctx.drawImage(neck, 0, 0, 300, 300);
    console.log(neck);
    ctx.drawImage(ears, 0, 0, 300, 300);
    console.log(ears);

    ctx.drawImage(hair, 0, 0, 300, 300);
    console.log(hair);

    ctx.drawImage(eyes, 0, 0, 300, 300);
    console.log(eyes);
    ctx.drawImage(accessories, 0, 0, 300, 300);
    ctx.drawImage(leg, 0, 0, 300, 300);
    ctx.drawImage(nose, 0, 0, 300, 300);
    ctx.drawImage(mouth, 0, 0, 300, 300);
    const url = canvas.toDataURL();
    const a = document.createElement('a');
    a.href = url;
    a.download = 'image.png';
    a.click();
  }






  });

const random = document.querySelector('.random');
random.addEventListener('click', function() { 

  createImage('hair', details.hair[randomValue(details.hair)]);
  createImage('backgrounds', details.backgrounds[randomValue(details.backgrounds)]);
  createImage('eyes', details.eyes[randomValue(details.eyes)]);
  createImage('ears', details.ears[randomValue(details.ears)]);
  createImage('accessories', details.accessories[randomValue(details.accessories)]);
  createImage('leg', details.leg[randomValue(details.leg)]);
  createImage('mouth', details.mouth[randomValue(details.mouth)]);
  createImage('neck', details.neck[randomValue(details.neck)]);

});



function randomValue(array) {
  return Math.floor(Math.random() *(array.length - 0 ));
}

