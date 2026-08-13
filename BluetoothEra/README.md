# BluetoothEra

Minimal one-page nostalgic music radio.

## Structure

BluetoothEra/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── background.png
│   └── covers/default.svg
└── audio/

## Add songs

Edit the `playlist` array in `script.js` and put your legally licensed audio files in `audio/`.

Example:

```js
{
  title: "Song Name",
  artist: "Artist",
  audio: "audio/song.mp3",
  cover: "assets/covers/song.jpg"
}
```

Open `index.html` directly or use VS Code Live Server.
