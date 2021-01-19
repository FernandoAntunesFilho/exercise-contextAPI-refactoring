import React from 'react';
import './App.css';
import Cars from './Cars';
import myContext from './context/MyContext';

class App extends React.Component {
  constructor(props) {
    super(props)
   
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      }
    }

  }

  moveCar = (car, side) => {
    this.setState((state) => ({
      ...state, cars: { ...state.cars, [car]: side }
    }))
  }

  render() {
    const contextValue = {
      state: this.state,
      moveCar: this.moveCar,
    }
    return (
      <myContext.Provider value={ contextValue }>
        <Cars />
      </myContext.Provider>
    );
  }
}

export default App;
