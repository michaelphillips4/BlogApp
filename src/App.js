
import './App.css';
import Music from './Components/Music/Music.js';
import Video from './Components/Video/Video.js';
function App() {
  return (

    <div>
     <div className="panel-music">
         <h2>Music</h2>
         <Music />
      </div>
      <div className="panel-video">
          <h2>Videos</h2>
          <Video />
      </div>



<h2 className='clear'>Blog Posts</h2>

<div className="box blogPost">
Nullam eget scelerisque lorem. Duis et enim malesuada, facilisis ipsum non, laoreet massa. Pellentesque nec congue nulla, at venenatis lorem. Duis condimentum efficitur mi eget auctor. Etiam vehicula luctus libero vitae ultrices. Nunc aliquet maximus libero, sed interdum velit rhoncus porttitor. Nulla facilisi. Sed diam risus, rhoncus a congue sollicitudin, convallis non nulla. Sed at ultricies turpis. Phasellus a metus efficitur, vehicula risus eget, pretium risus.
</div>   

<div className="box blogPost">
Donec luctus massa a facilisis tristique. Duis metus turpis, ornare in urna at, consectetur egestas velit. Curabitur laoreet lacus sit amet nibh venenatis hendrerit. Curabitur tempor metus eget eros facilisis, ac vulputate lectus pharetra. Sed vitae justo consectetur, accumsan metus nec, lacinia sapien. Pellentesque vitae vulputate risus, vitae pharetra purus. Vivamus sit amet consectetur lectus. Phasellus tincidunt pretium augue eget aliquam. In in pulvinar felis, quis ullamcorper leo. In mollis massa nisi. Nunc malesuada faucibus risus, a porta erat convallis sit amet.
 </div>  

      </div>

  );
}

export default App;
