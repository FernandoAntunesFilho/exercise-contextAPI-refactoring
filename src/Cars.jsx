// src/Cars.jsx

import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import myContext from './context/MyContext';

class Cars extends React.Component {
  render() {
    return (
      <myContext.Consumer>
        {
          value => (
            <div>
              <div>
                <img
                  className={value.state.cars.red ? 'car-right' : 'car-left'}
                  src={carRed}
                  alt="red car"
                />
                <button
                  onClick={ () => value.moveCar('red', !value.state.cars.red)}
                  type="button"
                >
                  Move
                </button>
              </div>
              <div>
                <img
                  className={value.state.cars.blue ? 'car-right' : 'car-left'}
                  src={carBlue}
                  alt="blue car"
                />
                <button
                  onClick={() => value.moveCar('blue', !value.state.cars.blue)}
                  type="button"
                >
                  Move
                </button>
              </div>
              <div>
                <img
                  className={value.state.cars.yellow ? 'car-right' : 'car-left'}
                  src={carYellow}
                  alt="yellow car"
                />
                <button
                  onClick={() => value.moveCar('yellow', !value.state.cars.yellow)}
                  type="button"
                >
                  Move
                </button>
              </div>
            </div>
          )
        }
      </myContext.Consumer>
      // <div>
      
      
      
      // </div>
    );
  }
}

export default Cars;
