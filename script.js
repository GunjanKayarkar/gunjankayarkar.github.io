function showTab(tabName) {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(t => t.classList.remove('active'));
  contents.forEach(c => c.classList.remove('active'));

  document.getElementById('tab-' + tabName).classList.add('active');
  document.getElementById('content-' + tabName).classList.add('active');
}

document.getElementById('modeSwitch').addEventListener('change', function () {
  document.body.classList.toggle('light', this.checked);
});
