import './Video.css';

let items=['PylonSong.mp3','Item 2'];

let itemList=items.map((item,index)=>{
  return <>
  <li key={index}>
    <h4>{item}</h4>
    <video width="320" height="240" controls>
        <source src="movie.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
      Your browser does not support the video tag.
    </video>
  </li>
  </>
})

function Video() {
  return (
    <ul>
    {itemList}
    </ul>
  );
}

export default Video;