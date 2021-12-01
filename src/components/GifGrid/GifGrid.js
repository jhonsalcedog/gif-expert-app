import React from 'react';
import GifGridItem from '../GifGridItem';
import Row from 'emerald-ui/lib/Row';
import Col from 'emerald-ui/lib/Col';
import Label from 'emerald-ui/lib/Label';
import Spinner from 'emerald-ui/lib/Spinner';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import PropTypes from 'prop-types';

import './GifGrid.css';

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);
  return (
    <div>
      <h3>
        <Label color="success" className="label-gif">
          {category}
        </Label>
      </h3>
      <Row>
        {loading && (
          <Col md={12} className="text-center">
            <Spinner size="lg" />
          </Col>
        )}
        {images.map(({ id, url, title }) => {
          return <GifGridItem key={id} url={url} title={title} />;
          //   return <GifGridItem key={img.id} {...img} />;
        })}
      </Row>
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
