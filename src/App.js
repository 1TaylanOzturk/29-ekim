import "./styles/App.css";
import { ADAGES, imgSources } from "./source";
import Carousel from "nuka-carousel";
import Audio from "./audios/audio.mp3";
import ReactAudioPlayer from "react-audio-player";

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

function App() {
  let adages = ADAGES;
  adages = shuffle(adages);

  return (
    <>
      <div className="title mb-5" style={{ height: window.innerHeight }}>
        29 Ekim
      </div>
      <div>
        <Carousel className="carousel mb-5" autoplayInterval={8000} autoplay>
          {imgSources.map((url, index) => {
            return (
              <div key={index}>
                <img src={url} alt="IMG" className="image" />
              </div>
            );
          })}
        </Carousel>
      </div>

      <div className="mb-5">
        {adages.map((element, index) => {
          return (
            <div className="card-adage" key={index}>
              {element[0]}
            </div>
          );
        })}
      </div>

      <div>
        <ReactAudioPlayer
          className="audio-player mb-3"
          src={Audio}
          volume={0.2}
          controls
        />
      </div>
    </>
  );
}

export default App;
