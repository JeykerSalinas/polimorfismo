let myIife = (() => {
  let settingData = (url, id) => {
    id.setAttribute("src", url);
    id.style.display = "block";
  };

  return {
    showData: (url, id) => settingData(url, id),
  };
})();

class Multimedia {
  constructor(url) {
    let _url = url;

    this.getUrl = () => _url;
  }

  get url() {
    return this.getUrl();
  }

  setStart() {
    return `This method makes a change in the URL of the video`;
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    let _id = id;

    this.getId = () => _id;
  }
  playMultimedia() {
    myIife.showData(this.url, this.getId());
  }
  setStart(tiempo) {
    this.getId().setAttribute("src", `${this.url}?start=${tiempo}`);
  }
}

let playMusica = new Reproductor("https://youtu.be/9m4VDrbviPs", musica);
playMusica.playMultimedia();
playMusica.setStart(200);
let playPelicula = new Reproductor("https://youtu.be/hUEyXyq98bU", peliculas);
playPelicula.playMultimedia();
let playSerie = new Reproductor("https://youtu.be/DRaLQ3kKz_k", series);
playSerie.playMultimedia();
