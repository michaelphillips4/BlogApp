
import './App.css';
import Music from './Components/Music/Music.js';
import Video from './Components/Video/Video.js';
function App() {
  return (
    <div>
     <div class="panel-music">
         <h2>Music</h2>
         <Music />
      </div>
      <div class="panel-video">
          <h2>Videos</h2>
          <Video />
      </div>
    </div>
  );
}

export default App;
