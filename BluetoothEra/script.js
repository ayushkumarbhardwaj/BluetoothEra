/* BluetoothEra - one-page music radio. Add only audio you are legally allowed to host. */
const CONFIG = {
  spotifyUrl: "https://open.spotify.com/",
  youtubeMusicUrl: "https://music.youtube.com/",
  defaultOnline: 29,
};
const playlist = [
  {
    title: "Brown Rang",
    artist: "Yo Yo Honey Singh",
    audio: "audio/brown-rang.mp3",
    cover: "assets/covers/default.jpeg",
  },
 
  {
    title: "Blue Eyes",
    artist: "Yo Yo Honey Singh",
    audio: "audio/blue-eyes.mp3",
    cover: "assets/covers/default.jpeg",
  },
  {
    title: "Dope Shope",
    artist: "Yo Yo Honey Singh, Jasmine Sandlas",
    audio: "audio/DopeShope.mp3",
    cover: "assets/covers/default.jpeg",
  },
  {
    title: "Desi Kalakaar",
    artist: "Yo Yo Honey Singh",
    audio: "audio/DesiKalakaar.mp3",
    cover: "assets/covers/default.jpeg",
  },
  {
    title: "Love Dose",
    artist: "Yo Yo Honey Singh",
    audio: "audio/LoveDose.mp3",
    cover: "assets/covers/default.jpeg",
  },
   {
    title: "One Bottle Down",
    artist: "Yo Yo Honey Singh, Jasmine Sandlas",
    audio: "audio/OneBottleDown.mp3",
    cover: "assets/covers/default.jpeg",
  },
  {
    title: "Party All Night",
    artist: "Yo Yo Honey Singh, Sardool Sikander",
    audio: "audio/PartyAllNight.mp3",
    cover: "assets/covers/default.jpeg",
  },
  {
    title: "Angreji Beat",
    artist: "Yo Yo Honey Singh",
    audio: "audio/angreji-beat.mp3",
    cover: "assets/covers/default.jpeg",
  },
  {
    title: "Yaar Naa Miley Kick",
    artist: "Yo Yo Honey Singh, Jasmine Sandlas",
    audio: "audio/YaarNaaMileyKick.mp3",
    cover: "assets/covers/default.jpeg",
  },
  
  
  
  {
    title: "Aankhon Aankhon",
    artist: "Yo Yo Honey Singh",
    audio: "audio/AankhonAankhon.mp3",
    cover: "assets/covers/default.jpeg",
  },
 
  {
    title: "Birthday Bash",
    artist: "Yo Yo Honey Singh",
    audio: "audio/birthday-bash.mp3",
    cover: "assets/covers/default.jpeg",
  },
  {
    title: "Aadat",
    artist: "Yo Yo Honey Singh",
    audio: "audio/aadat.mp3",
    cover: "assets/covers/default.jpeg",
  },
  {
    title: "Chaar Botal Vodka",
    artist: "Yo Yo Honey Singh, Jasmine Sandlas",
    audio: "audio/ChaarBotalVodka.mp3",
    cover: "assets/covers/default.jpeg",
  },
  
   {
    title: "Bonita",
    artist: "Yo Yo Honey Singh, Sardool Sikander",
    audio: "audio/bonita.mp3",
    cover: "assets/covers/default.jpeg",
  },
   {
    title: "Yadaan",
    artist: "Yo Yo Honey Singh, Sardool Sikander",
    audio: "audio/yadaan.mp3",
    cover: "assets/covers/default.jpeg",
  },





  {
    title: "Boss",
    artist: "Yo Yo Honey Singh",
    audio: "audio/Boss.mp3",
    cover: "assets/covers/default.jpeg",
  },
  {
    title: "Chhote Chhote Peg",
    artist: "Yo Yo Honey Singh",
    audio: "audio/ChhoteChhotePeg.mp3",
    cover: "assets/covers/default.jpeg",
  },
  {
    title: "Damaa Dam Mast Kalandar",
    artist: "Yo Yo Honey Singh",
    audio: "audio/DamaaDamMastKalandar.mp3",
    cover: "assets/covers/default.jpeg",
  },
 
  {
    title: "Dheere Dheere Se",
    artist: "Yo Yo Honey Singh",
    audio: "audio/DheereDheere.mp3",
    cover: "assets/covers/default.jpeg",
  },
  {
    title: "Dil Chori",
    artist: "Yo Yo Honey Singh",
    audio: "audio/DilChori.mp3",
    cover: "assets/covers/default.jpeg",
  },
  {
    title: "Fugly Title Track",
    artist: "Yo Yo Honey Singh, Jasmine Sandlas",
    audio: "audio/FuglyTitleTrack.mp3",
    cover: "assets/covers/default.jpeg",
  },
  
   {
    title: "Get Up Jawani",
    artist: "Yo Yo Honey Singh, Sardool Sikander",
    audio: "audio/GetUpJawani.mp3",
    cover: "assets/covers/default.jpeg",
  },
   {
    title: "Goliyan",
    artist: "Yo Yo Honey Singh, Sardool Sikander",
    audio: "audio/Goliyan.mp3",
    cover: "assets/covers/default.jpeg",
  },


   {
    title: "Ice Cream",
    artist: "Yo Yo Honey Singh",
    audio: "audio/IceCream.mp3",
    cover: "assets/covers/default.jpeg",
  },
  {
    title: "Loca",
    artist: "Yo Yo Honey Singh",
    audio: "audio/Loca.mp3",
    cover: "assets/covers/default.jpeg",
  },
  {
    title: "Lak 28 Kudi Da",
    artist: "Yo Yo Honey Singh",
    audio: "audio/Lak28KudiDa.mp3",
    cover: "assets/covers/default.jpeg",
  },
 
  {
    title: "Lonely",
    artist: "Yo Yo Honey Singh",
    audio: "audio/Lonely.mp3",
    cover: "assets/covers/default.jpeg",
  },

 
  
   {
    title: "Payal",
    artist: "Yo Yo Honey Singh, Sardool Sikander",
    audio: "audio/Payal.mp3",
    cover: "assets/covers/default.jpeg",
  },
   
];
const $ = (id) => document.getElementById(id);
const audio = $("audio"),
  heroPlay = $("heroPlay"),
  heroPlayIcon = $("heroPlayIcon"),
  heroPlayText = $("heroPlayText"),
  player = $("player"),
  playPause = $("playPause"),
  prev = $("prev"),
  next = $("next"),
  progress = $("progress"),
  cover = $("cover"),
  trackTitle = $("trackTitle"),
  trackArtist = $("trackArtist"),
  currentTime = $("currentTime"),
  duration = $("duration"),
  playerStatus = $("playerStatus"),
  clock = $("clock"),
  onlineCount = $("onlineCount");
let currentIndex = 0,
  isPlaying = false,
  audioErrorShown = false;
function updateClock() {
  clock.textContent = new Date()
    .toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
    .toLowerCase();
}
function updateOnline() {
  onlineCount.textContent =
    CONFIG.defaultOnline + (Math.floor(Math.random() * 5) - 2);
}
function formatTime(s) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  return `${Math.floor(s / 60)}:${Math.floor(s % 60)
    .toString()
    .padStart(2, "0")}`;
}
function loadSong(index) {
  currentIndex = (index + playlist.length) % playlist.length;
  const song = playlist[currentIndex];
  trackTitle.textContent = song.title;
  trackArtist.textContent = song.artist;
  cover.src = song.cover;
  audio.src = song.audio;
  audio.load();
  currentTime.textContent = "0:00";
  duration.textContent = "0:00";
  progress.value = 0;
  playerStatus.textContent = "Add your licensed audio files to /audio";
  audioErrorShown = false;
}
async function playSong() {
  player.classList.add("visible");
  try {
    await audio.play();
    isPlaying = true;
    updatePlayUI();
    playerStatus.textContent = "Now playing";
  } catch (e) {
    isPlaying = false;
    updatePlayUI();
    if (!audioErrorShown) {
      playerStatus.textContent = "Add a licensed MP3 for this song in /audio";
      audioErrorShown = true;
    }
  }
}
function pauseSong() {
  audio.pause();
  isPlaying = false;
  updatePlayUI();
}
function togglePlay() {
  isPlaying ? pauseSong() : playSong();
}
function updatePlayUI() {
  const icon = isPlaying ? "Ⅱ" : "▶";
  heroPlayIcon.textContent = icon;
  heroPlayText.textContent = isPlaying
    ? "Pause BluetoothEra"
    : "Play BluetoothEra";
  playPause.textContent = icon;
  playPause.setAttribute("aria-label", isPlaying ? "Pause" : "Play");
}
function nextSong() {
  loadSong(currentIndex + 1);
  playSong();
}
function previousSong() {
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }
  loadSong(currentIndex - 1);
  playSong();
}
function updateProgress() {
  if (!Number.isFinite(audio.duration)) return;
  progress.max = audio.duration;
  progress.value = audio.currentTime;
  currentTime.textContent = formatTime(audio.currentTime);
  duration.textContent = formatTime(audio.duration);
}
heroPlay.addEventListener("click", togglePlay);
playPause.addEventListener("click", togglePlay);
next.addEventListener("click", nextSong);
prev.addEventListener("click", previousSong);
progress.addEventListener("input", () => {
  if (Number.isFinite(audio.duration))
    audio.currentTime = Number(progress.value);
});
audio.addEventListener("loadedmetadata", () => {
  duration.textContent = formatTime(audio.duration);
  progress.max = audio.duration;
});
audio.addEventListener("timeupdate", updateProgress);
audio.addEventListener("play", () => {
  isPlaying = true;
  player.classList.add("visible");
  updatePlayUI();
});
audio.addEventListener("pause", () => {
  isPlaying = false;
  updatePlayUI();
});
audio.addEventListener("ended", nextSong);
audio.addEventListener("error", () => {
  isPlaying = false;
  updatePlayUI();
  if (!audioErrorShown) {
    playerStatus.textContent =
      "Audio file unavailable — add your licensed MP3 in /audio";
    audioErrorShown = true;
  }
});
$("spotifyLink").href = CONFIG.spotifyUrl;
$("youtubeLink").href = CONFIG.youtubeMusicUrl;
loadSong(0);
updateClock();
updateOnline();
setInterval(updateClock, 1000);
setInterval(updateOnline, 15000);
