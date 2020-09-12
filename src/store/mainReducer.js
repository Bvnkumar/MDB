import { combineReducers } from "redux";
import { welcomeReducer } from "../pages/welcome/welcomeReducer";
import { artistsReducer } from "../pages/artists/artistsReducer";
import { albumsReducer } from "../pages/albums/albumsReducer";

export default combineReducers({
  welcome: welcomeReducer,
  artists: artistsReducer,
  albums: albumsReducer,
});
