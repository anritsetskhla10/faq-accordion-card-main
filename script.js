

const arrows = document.querySelectorAll('.arrow');


function arrowDown(event) {
    const arrow = event.currentTarget;
    const contentContainer = arrow.closest('.content-conatiner');
    const existingText = contentContainer.querySelector('.text');
    const paragraph = contentContainer.querySelector('p');
  
    let msg = "";
    if (arrow.classList.contains('upload-size')) {
      msg = "No more than 2GB. All files in your account must fit your allotted storage space.";
  
      if (existingText) {
        contentContainer.removeChild(existingText);
        arrow.classList.remove('arrow-up'); 
        arrow.classList.add('arrow');
        paragraph.classList.remove('bold')
      } else {
        const text = document.createElement('span');
        text.classList.add('text');
        text.textContent = msg;
        contentContainer.appendChild(text);
        arrow.classList.add('arrow-up');
        arrow.classList.remove('arrow');
        paragraph.classList.add('bold')
      }
    } else {
      msg = "Any text";
      if (existingText) {
        contentContainer.removeChild(existingText);
        arrow.classList.remove('arrow-up'); 
        arrow.classList.add('arrow');
        paragraph.classList.remove('bold')
      } else {
        const text = document.createElement('span');
        text.classList.add('text');
        text.textContent = msg;
        contentContainer.appendChild(text);
        arrow.classList.add('arrow-up');
        arrow.classList.remove('arrow');
        paragraph.classList.add('bold')
      }
    }
  }

arrows.forEach(arrow => {
  arrow.addEventListener("click", arrowDown);
});
