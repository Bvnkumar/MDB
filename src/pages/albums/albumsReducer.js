import { combineReducers } from "redux";
import { albumsData } from "../../constants/albums";
const albums = { albumsData };
export const albumsReducer = (state = albums, action) => {
  return state;
};
export default combineReducers({ albums: albumsReducer });
