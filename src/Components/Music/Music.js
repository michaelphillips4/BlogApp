import './Music.css';

let items=['Item 1','Item 2','Item 3','Item 4','Item 5'];

let itemList=items.map((item,index)=>{
  return <li key={index}>
    <h4>{item}</h4>
    <audio controls>
             <source src="horse.ogg" type="audio/ogg" />
             <source src="horse.mp3" type="audio/mpeg"/>
           Your browser does not support the audio element.
     </audio>
   </li>
})

function Music() {
  return (
    <ul>
    {itemList}
    </ul>
  );
}

export default Music;