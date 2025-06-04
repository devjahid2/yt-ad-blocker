function runAdBlocker() {
  const skipAds = () => {
    const skipBtn = document.querySelector('.ytp-ad-skip-button');
    if (skipBtn) {
      skipBtn.click();
      console.log('[AdBlocker] Skipped a video ad');
    }
  };

  const removeAdElements = () => {
    const adSelectors = [
      '.video-ads',
      '.ytp-ad-module',
      '.ytp-ad-overlay-container',
      '.ytp-ad-image-overlay',
      'ytd-promoted-sparkles-text-search-renderer',
      'ytd-display-ad-renderer',
      '#player-ads'
    ];

    adSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.remove();
        console.log(`[AdBlocker] Removed: ${selector}`);
      });
    });
  };

  setInterval(() => {
    skipAds();
    removeAdElements();
  }, 1000);
}

// Check if enabled before running
chrome.storage.local.get(['adBlockEnabled'], (result) => {
  if (result.adBlockEnabled !== false) {
    runAdBlocker();
  } else {
    console.log('[AdBlocker] Disabled via toggle');
  }
});
