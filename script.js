

const containers = document.querySelectorAll('.content-container');

function containerDown(event) {
  const container = event.currentTarget;
  const arrow = container.querySelector('.all-arrow');


  const contentCo = container.closest('.content-container');
  const existingText = contentCo.querySelector('.text');
  const paragraph = contentCo.querySelector('p');

  let msg = "";
  if (container.classList.contains('upload-size')) {
    msg = "No more than 2GB. All files in your account must fit your allotted storage space.";

    if (existingText) {
      contentCo.removeChild(existingText);
      arrow.classList.remove('arrow-up');
      arrow.classList.add('arrow');
      paragraph.classList.remove('bold');
    } else {
      const text = document.createElement('span');
      text.classList.add('text');
      text.textContent = msg;
      contentCo.appendChild(text);
      arrow.classList.add('arrow-up');
      arrow.classList.remove('arrow');
      paragraph.classList.add('bold');
    }
  } else {
    msg = "Any text";
    if (existingText) {
      contentCo.removeChild(existingText);
      arrow.classList.remove('arrow-up');
      arrow.classList.add('arrow');
      paragraph.classList.remove('bold');
    } else {
      const text = document.createElement('span');
      text.classList.add('text');
      text.textContent = msg;
      contentCo.appendChild(text);
      arrow.classList.add('arrow-up');
      arrow.classList.remove('arrow');
      paragraph.classList.add('bold');
    }
  }
}

containers.forEach(container => {
  container.addEventListener("click", containerDown);
});



