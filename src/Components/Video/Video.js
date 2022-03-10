import "./Video.css";

let items = [
  { name: "PylonSong.mp3", display: "Pylon Song" },
  {
    name: "Alhambra.mp3",
    display: "Recuerdos de la Alhambra by Francisco Tárrega",
  },
];

let itemList = items.map((item, index) => {
  return (
    <>
      <li key={index}>
        <h4>{item.display}</h4>
        <video width="320" height="240" controls>
          <source src="{item.name}" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </li>
    </>
  );
});

function Video() {
  return <ul>{itemList}</ul>;
}

export default Video;