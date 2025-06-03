

const toggle = document.getElementById('toggle');

chrome.storage.local.get(['adBlockEnabled'], (result) => {
  toggle.checked = result.adBlockEnabled !== false; // default is true
});

toggle.addEventListener('change', () => {
  chrome.storage.local.set({ adBlockEnabled: toggle.checked });
});
