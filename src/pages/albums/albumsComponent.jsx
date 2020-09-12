import React from 'react'
import { Cards } from '../cards/cardsComponent'

export default class Albums extends React.Component {
    render() {
        const { albumsData } = this.props
        const artistName = this.props.match.params.pathParam
        return (
            <div className="container">
                <h5 className="section-title h1 blue-color">Albums of {artistName}</h5>
                <div className="row">
                    <Cards data={albumsData.filter(item => item.artistName === artistName)} type="albums" />
                </div>
            </div>
        )
    }
}