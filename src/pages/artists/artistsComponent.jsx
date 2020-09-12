import React from "react";
import { Cards } from '../cards/cardsComponent'

export default class Artists extends React.Component {

  render() {
    const { artistsData } = this.props;
    return (
      <div className="container">
        <h5 className="section-title h1 blue-color">Artists</h5>
        <div className="row">
          <Cards data={artistsData} type={'artist'} />
        </div>
      </div>
    );
  }
}
