# 🚫 Ad Blocker Toggle Extension

A simple yet powerful Chrome extension to **block ads from 50+ common ad networks**. Control it instantly with a **sleek animated toggle switch** — all without reloading your browser.

---

## ✨ Features

- ✅ **Real Ad Blocking** — Uses Chrome’s `declarativeNetRequest` API to block 50+ ad and tracker domains.
- 🎛️ **Interactive Toggle UI** — Smooth toggle switch to turn blocking on or off instantly.
- 💾 **State Persistence** — Saves toggle state in `chrome.storage.local`, even after browser restart.
- 🔇 **Silent & Fast** — Lightweight and works in the background with no slowdown.
- 📱 **Audio & Haptic Feedback** — Click sound + vibration (on supported devices).
- 💻 **Fully Offline** — No external servers or dependencies required.
- 🛠️ **Easily Customizable** — Add your own block rules or modify the UI.

---

## 📸 Demo

![Toggle Demo](https://user-images.githubusercontent.com/yourusername/demo-toggle.gif)

---

## 🚀 Installation

1. **Clone** or [download this repo](https://github.com/yourusername/ad-blocker-toggle-extension).
2. Open **Google Chrome** and navigate to:  
   `chrome://extensions/`
3. Enable **Developer Mode** (top right).
4. Click **Load unpacked** and select the folder containing this extension.

---

## 🧠 Usage

- Click the extension icon in the toolbar.
- Use the toggle to enable/disable ad blocking.
- Blocking status is saved and restored on next launch.

---

## 🗂️ File Structure

| File           | Purpose                                  |
|----------------|------------------------------------------|
| `manifest.json`| Extension metadata and permissions       |
| `rules.json`   | Blocking rules for 50+ ad domains        |
| `popup.html`   | UI layout for toggle                     |
| `style.css`    | Styling and animations                   |
| `popup.js`     | JS logic for toggle and state handling   |

---

## 🔮 Ideas for Future Enhancements

- [ ] Add domain whitelist support  
- [ ] Show how many ads were blocked  
- [ ] Dark mode for popup  
- [ ] Sync toggle state with Chrome Sync

---

## 🙌 Contributing

Contributions are welcome! Feel free to:

- Add new block rules
- Improve animations or UI
- Report bugs or request features

Just fork the repo, create a branch, and open a pull request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author

Created with 💡 by [Jahid Hasan](https://www.linkedin.com/in/developerjahidhasan/)

---

⭐️ If you found this helpful, please star the repo and share it!
