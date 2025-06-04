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
      console.log(`[AdBlocker] Removed a ad`);
    });
  });
};

setInterval(() => {
  skipAds();
  removeAdElements();
}, 1000);