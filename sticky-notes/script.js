

const container2 = document.querySelector('.container2');
const container3 = document.querySelector('.container3');
container3.style.display = 'none';

const btnCheck = document.querySelector('.btn-check');
const btnClose = document.querySelector('.btn-close');

const btnTypeNote = document.querySelector('.btn-note');

btnTypeNote.addEventListener('click', function() {
  typeNote();
});

btnCheck.addEventListener('click', function() {
  createNote();
})

btnClose.addEventListener('click', function() {
  closeNotes();
})




let i = 0;

function createNote() {
  const noteText = document.querySelector('#note-text').value;

  const node0 = document.createElement('div');
  const node1 = document.createElement('h1');

  node1.innerHTML = noteText;

  node1.setAttribute('style', `width:250px; height:250px; font-size:26px; padding:25px;
   margin-top:10px;overflow:hidden; box-shadow: 0px 10px 24px 0px rgba(0,0,0,0.75)`);

   node1.style.margin = margin();
   node1.style.transform = rotate();
   console.log(rotate());
   node1.style.background = color();

  node0.appendChild(node1);
  node0.style.transition = 'transform .4s';

  container2.insertAdjacentElement('beforeend', node0);

  node0.addEventListener('mouseenter', function() {
    node0.style.transform = 'scale(1.1)';
  });

  node0.addEventListener('mouseleave', function() {
    node0.style.transform = 'scale(1)'
  })

  node0.addEventListener('dblclick', function() {
    node0.remove();
  })

  document.querySelector('#note-text').value = '';

}



function typeNote() {
  if(container3.style.display == 'none') {
    container3.style.display = 'block';
  } else {
    container3.style.display = 'none';
  }
}

function closeNotes() {
  container3.style.display = 'none';
}



function margin() {
 const randomMargin = ['-5px', '1px', '5px', '10px', '15px', '20px',];

 return randomMargin[Math.floor(Math.random() * randomMargin.length)];
}

function rotate() {
  const randomRotate = ['rotate(1deg)', 'rotate(2deg)', 'rotate(-1deg)', 'rotate(-3deg)', 'rotate(-5deg)', 'rotate(-10deg)'];

  return randomRotate[Math.floor(Math.random() * randomRotate.length)];
}

function color() {
  const randomColor = ['red', 'blue', 'green', 'orange', 'purple', '#FC6638'];

  if( i > randomColor.length - 1) {
    i = 0;
  }

  return randomColor[i++];


  // return randomColor[Math.floor(Math.random() * randomColor.length)];
}
