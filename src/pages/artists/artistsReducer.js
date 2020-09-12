import { combineReducers } from "redux";
import { artistsData } from "../../constants/artists";
const artists = { artistsData };
export const artistsReducer = (state = artists, action: any) => {
  return state;
};
export default combineReducers({ artists: artistsReducer });
