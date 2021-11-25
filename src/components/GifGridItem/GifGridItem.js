import React from 'react';

import Col from 'emerald-ui/lib/Col';
import Card from 'emerald-ui/lib/Card';
import PropTypes from 'prop-types';

import './GifGridItem.css';
import 'animate.css';

const GifGridItem = ({ url, title }) => {
  return (
    <Col md={6} xs={12} className="animate__animated animate__zoomIn">
      <Card className="gif-card">
        <Card.Header>
          <h1 className="eui-card-header-title">{title}</h1>
        </Card.Header>
        <div>
          <img className="gif-card-img" src={url} alt={title} />
        </div>
      </Card>
    </Col>
  );
};

GifGridItem.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};

export default GifGridItem;
