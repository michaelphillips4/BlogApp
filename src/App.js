import './App.css';
import Music from './Components/Music/Music.js';
import Video from './Components/Video/Video.js';
import Blog from './Components/Blog/Blog.js';


function App() {
  return (
<>
    <div>
     <div className="panel-music">
         <h2>Music</h2>
         <Music />
      </div>
      <div className="panel-video">
          <h2>Videos</h2>
          <Video />
      </div>
    </div>
<Blog />
</>
);
}

export default App;
