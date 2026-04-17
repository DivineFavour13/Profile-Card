const timeElement = document.querySelector('[data-testid="test-user-time"]');

function renderCurrentTime() {
  if (!timeElement) {
    return;
  }

  timeElement.textContent = String(Date.now());
}

renderCurrentTime();
window.setInterval(renderCurrentTime, 1000);
