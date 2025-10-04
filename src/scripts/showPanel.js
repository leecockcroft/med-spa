function showPanel(name) {
  const panels = document.querySelectorAll('.panel');
  panels.forEach(panel => panel.style.display = 'none');

  const target = document.querySelector(`.panel.${name}`);
  if (target) {
    target.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  showPanel('massage'); // default
});


