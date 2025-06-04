

// const toggle = document.getElementById('toggle');

// chrome.storage.local.get(['adBlockEnabled'], (result) => {
//   toggle.checked = result.adBlockEnabled !== false; // default is true
// });

// toggle.addEventListener('click', () => {
//   chrome.storage.local.set({ adBlockEnabled: toggle.checked });
// });

const toggle = document.querySelector('#toggle .checkbox');

// Load the stored state on popup load
chrome.storage.local.get(['adBlockEnabled'], (result) => {
  const isEnabled = result.adBlockEnabled !== false; // default is true
  toggle.checked = isEnabled;
  updateToggleState(isEnabled);
});

// Save to local storage and update visuals on click
toggle.addEventListener('change', () => {
  const isEnabled = toggle.checked;
  chrome.storage.local.set({ adBlockEnabled: isEnabled });
  updateToggleState(isEnabled);
});

function updateToggleState(enabled) {
  const layer = document.querySelector('#toggle .layer');
  const knobs = document.querySelector('#toggle .knobs:before');

  // You can do additional visual updates here if needed
}
