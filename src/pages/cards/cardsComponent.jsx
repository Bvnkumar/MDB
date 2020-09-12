import React from 'react'

export const Cards = props => {
  const getSongs = (songs) => {
    return songs && songs.map(item => {
      return <div key={item} className="text-left d-flex pb-1"><i className="material-icons pr-2">music_note</i>{item}</div>
    })
  }

  const getArtists = () => {
    const { data, type } = props;
    const items = data && data.map(item => {
      return <div className="col-xs-12 col-sm-6 col-md-3 pb-2" key={item.name}>
        <div className="card border-blue">
          <div className="card-body text-center">
            <p>
              <img
                className="album-icon"
                src={item.img}
                alt="card"
              />
            </p>
            <h4 className="card-title singer-title">{item.name}</h4>
            {type !== 'albums' && <a
              href={type !== 'albums' && `/albums/${item.name}`}
              className="btn btn-sm btn-color"
            >
              Albums
                  </a>}
            {type === 'albums' && <div>
              {getSongs(item.songs)}
            </div>
            }
          </div>
        </div>

      </div>
    })
    return items;
  }

  return <>{getArtists()}</>

}