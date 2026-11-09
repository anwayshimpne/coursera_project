(() => {
  const form = document.getElementById('recommendation-form');
  const input = document.getElementById('recommendation-text');
  const list = document.getElementById('recommendation-list');
  const popup = document.getElementById('recommendation-popup');
  const closeButton = popup.querySelector('.popup-close');
  let popupTimer;

  function showPopup() {
    window.clearTimeout(popupTimer);
    popup.hidden = false;
    closeButton.focus();
    popupTimer = window.setTimeout(() => {
      popup.hidden = true;
    }, 5000);
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const recommendation = input.value.trim();
    if (!recommendation) {
      input.setCustomValidity('Please enter a recommendation before submitting.');
      input.reportValidity();
      return;
    }
    input.setCustomValidity('');

    const card = document.createElement('blockquote');
    card.className = 'recommendation-card';

    const message = document.createElement('p');
    message.textContent = `“${recommendation}”`;

    const footer = document.createElement('footer');
    const avatar = document.createElement('span');
    avatar.className = 'avatar';
    avatar.textContent = 'Y';
    avatar.setAttribute('aria-hidden', 'true');

    const identity = document.createElement('span');
    const name = document.createElement('strong');
    name.textContent = 'You';
    const label = document.createElement('small');
    label.textContent = 'Community member';
    identity.append(name, label);
    footer.append(avatar, identity);
    card.append(message, footer);
    list.append(card);

    input.value = '';
    showPopup();
  });

  input.addEventListener('input', () => input.setCustomValidity(''));
  closeButton.addEventListener('click', () => {
    window.clearTimeout(popupTimer);
    popup.hidden = true;
  });
})();
