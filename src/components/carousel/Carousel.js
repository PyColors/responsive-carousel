import React, { Component } from 'react';
import Loader from '../ui/loader/Loader';
import PropTypes from 'prop-types';
import Figure from '../ui/figure/Figure';

import './Carousel.css';

class Carousel extends Component {

  constructor (props) {
    super(props);

    this.state = {
      photos: [],
      isLoading: true,
      Prev: true,
      isNext: true
    };
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos = () => {
    this.setState({ 
      isLoading: true 
    }); 
    return fetch('https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=12&format=json&nojsoncallback=1')
    .then(response => response.json())
    .then(json => {
        this.setState({ 
          photos: json.photos.photo,
          isLoading: false,
         });
    }).catch((error) => {
      // Error!!!
      this.setState({ 
        isLoading: false 
      });
    });
  }

  handlePrevButton = (event) => {
    event.preventDefault();
    //
  }

  handleNextButton = (event) => {
    event.preventDefault();
    //
  }
 
  render() {
    const { photos, isLoading } = this.state;

    if (isLoading) {
      return <Loader />;
    }

    return ( 
      <section>
        <figure className="carousel" role="group">
          <figcaption className="carousel_figcaption">Responsive Carousel - Flickr API </figcaption>
          {(photos.length > 0) ? (
              photos.map(function (photo, indexItem) {
                return (
                  <li className="carousel__item" key={indexItem}>
                    <Figure
                      alt={photo.title}
                      // Understanding Flickr JSON from here: https://www.flickr.com/services/api
                      src={`http://farm${photo.farm}.static.flickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                      title={photo.title}
                      figcaption={photo.title}
                    />
                  </li>
                );
              })
            ) : null
          }
        </figure>

        <footer className="carousel__footer">
          <button
            onClick={this.handlePrevButton}
            type="button">Prev
          </button>

          <button
            onClick={this.handleNextButton}
            type="button">Next
          </button>
        </footer> 
        
      </section>
    );
  }
}

Carousel.propTypes = {
  photos: PropTypes.object,
};

export default Carousel;
