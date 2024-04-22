
const containers = document.querySelectorAll('.content-container');
const data = [
  "There is no limit on team members for the Premium plan.",
  "No more than 2GB. All files in your account must fit your allotted storage space.",
  "Sign in with your ID. Then click Password & Security, Change Password, and follow the onscreen instructions.",
  "Yes! Send us a message and we’ll process your request no questions asked.",
  "24/7 Live Phone & Chat Support"
];

function containerDown(event) {
  const container = event.currentTarget;
  const arrow = container.querySelector('.all-arrow');
  const textContainer = container.querySelector('.text');

  if (textContainer) {
    container.removeChild(textContainer);
    arrow.classList.remove('arrow-up');
    arrow.classList.add('arrow');
    container.querySelector('p').classList.remove('bold');
  } else {
    const index = Array.from(containers).indexOf(container);
    const text = document.createElement('span');
    text.classList.add('text');
    text.textContent = data[index];
    container.appendChild(text);
    arrow.classList.add('arrow-up');
    arrow.classList.remove('arrow');
    container.querySelector('p').classList.add('bold');
  }
}

containers.forEach(container => {
  container.addEventListener("click", containerDown);
});
