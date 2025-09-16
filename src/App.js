import './App.css';
import './css/lightSlider.css';
import './css/style.css';

import music_01_off from './images/mcard_35/music_01_off.png';
import music_01_on from './images/mcard_35/music_01_on.png';
import music_01 from './music/bgm01.mp3';
import { useEffect, useState } from 'react';

function App() {
  const [audio] = useState(new Audio(music_01));
  const [isPlaying, setIsPlaying] = useState(false);

  const music_player = () => {
    audio.loop = true;
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying, audio]);

  return (
    <div className='mcard_35'>
      <div className='wrapper'>
        <section id="content">
          {/* PLAYER */}
          <div className="music">
            <button onClick={music_player} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
              <div>
                <img src={isPlaying ? music_01_on : music_01_off} alt='music'/>
              </div>
            </button>
          </div>
          {/* PLAYER */}
          {/* 비주얼 */}
          <section class="visual-section">
            <div class="vertical-top">
              <div class="vertical-item name vertical-center">
                <p class="name">
                  <span class="vs-span">임현도</span>
                  <span class="vs-span bar">&</span>
                  <span class="vs-span">조보라</span>
                </p>
              </div>
              <div class="vertical-item info">
                <p class="p1">
                  <span class="vs-span">2026년01월</span>
                  <span class="vs-span bar">10</span>
                  <span class="vs-span">오후 2시 00분</span>
                </p>
                <p class="p2">
                  잇츠카드 웨딩홀 6층 노블레스홀
                </p>
              </div>
            </div>
          </section>
          {/* 비주얼 */}
        </section>
      </div>
    </div>
  );
}

export default App;
