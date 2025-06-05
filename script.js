function showTab(tabName) {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => tab.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));

  document.getElementById('tab-' + tabName).classList.add('active');
  document.getElementById('content-' + tabName).classList.add('active');
}

// Dark/light mode toggle with slider
const modeSwitch = document.getElementById('modeSwitch');

modeSwitch.addEventListener('change', () => {
  if (modeSwitch.checked) {
    document.body.classList.add('light');
  } else {
    document.body.classList.remove('light');
  }
});
