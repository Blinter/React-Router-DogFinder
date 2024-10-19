import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import './DogList.css';

function DogList({ dogs }) {
  return (
    <div
      key={uuidv4()}
      className="dog-list">
      {dogs.map(dog => (
        <Link
          key={dog.name}
          to={`/dogs/${dog.name.toLowerCase()}`}>
          <img
            className="dog-item"
            src={dog.src}
            alt={dog.name} />
        </Link>
      ))}
    </div>
  );
}

DogList.propTypes = {
  dogs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export default DogList;