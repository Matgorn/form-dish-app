import { Component } from 'react';
import './App.css';
import PizzaConditionals from './PizzaConditionals';
import SoupConditionals from './SoupConditionals';
import SandwichConditionals from './SandwichConditionals';

const defaultState = {
  name: '',
  type: 'pizza',
  preparation_time: "00:00:00",
  no_of_slices: null,
  diameter: null,
  spiciness_scale: null,
  slices_of_bread: null
}

const defaultConditionals = {
  no_of_slices: null,
  diameter: null,
  spiciness_scale: null,
  slices_of_bread: null
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = defaultState;
  }

  onOptionSelect = (e) => {
    this.setState({
      ...defaultConditionals,
      type: e.target.value
    })
  }

  onNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  onPrepTimeChange = (e) => {
    this.setState({
      preparation_time: e.target.value
    })
  }

  onConditionChange = (value) => {
    console.log(value);
    if(value) {
      this.setState({
        no_of_slices: value.no_of_slices,
        diameter: value.diameter,
        slices_of_bread: value.slices_of_bread,
        spiciness_scale: value.spiciness_scale
      })
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.setState({
      ...defaultState
    })

    fetch('https://frosty-wood-6558.getsandbox.com:443/dishes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(response => response.json())
    .then(data => console.log(data)) 
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} id="dish-form">
          <label htmlFor="name">Dish name: </label>
          <input
            value={this.state.name}
            onChange={this.onNameChange} 
            name="name" 
            id="name" 
            type="text" />

          <label htmlFor="prep-time">Preparation time: </label>
          <input 
            value={this.state.preparation_time}
            onChange={this.onPrepTimeChange} 
            name="prep-time" 
            id="prep-time" 
            type="time" 
            step="1" 
          />

          <label htmlFor="dish-type">Dish type: </label>
          <select 
            value={this.state.type} 
            onChange={this.onOptionSelect} 
            name="dish-type" 
            id="dish-type" 
            form="dish-form"
          >
            <option value="pizza">pizza</option>
            <option value="soup">soup</option>
            <option value="sandwich">sandwich</option>
          </select>

          {this.state.type === 'pizza' ?
            <PizzaConditionals
              onChange={this.onConditionChange}
            /> :
          this.state.type === 'soup' ?
            <SoupConditionals 
              onChange={this.onConditionChange}
            /> :
          this.state.type === 'sandwich' ?
            <SandwichConditionals 
              onChange={this.onConditionChange}
            /> : null
          }

          <input type="submit" value="Get Dish" />
        </form>
      </div>
    );
  }
}

export default App;