//Importing projects images
import musicLibraryImage from "./assets/music-library.png";
import youtubeCloneImage from "./assets/youtube-clone.png";
import videoGameDataImage from "./assets/video-game-data.png";

const musicLibrary = {
  name: "MusiColl",
  backendLink: "https://github.com/mbisovskyi/Music-Library-API",
  frontendLink: "https://github.com/mbisovskyi/Music_Library-frontend-",
  image: musicLibraryImage,
};

const youtubeClone = {
  name: "VideoSmacker",
  backendLink:
    "https://github.com/mbisovskyi/YouTube-Clone-FullStack/tree/main/backend",
  frontendLink:
    "https://github.com/mbisovskyi/YouTube-Clone-FullStack/tree/main/frontend",
  image: youtubeCloneImage,
};

const videoGameData = {
  name: "VideoGamer Data",
  backendLink: "https://github.com/mbisovskyi/Video-Game-Data-API",
  frontendLink: "https://github.com/mbisovskyi/Video-Game--front",
  image: videoGameDataImage,
};

const projectsData = [musicLibrary, youtubeClone, videoGameData];

export default projectsData;
