import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Figure.css';

class Figure extends Component {

    render() {
        const { alt, src, title, figcaption } = this.props;
    
        return (
          <figure className="figure">
            <img 
              className="figure__img"
              src={src}
              alt={alt}
              title={title}
            />
            <figcaption 
              className="figure__figcaption">
              {figcaption}
            </figcaption>
          </figure>
        );
    }
}

Figure.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    figcaption: PropTypes.string.isRequired,
    title: PropTypes.string
};

Figure.defaultProps = {
    title:''
};

export default Figure;
