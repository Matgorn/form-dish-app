import { Component } from 'react';
import PizzaConditionals from './PizzaConditionals';
import SoupConditionals from './SoupConditionals';
import SandwichConditionals from './SandwichConditionals';
import DishName from './DishName';
import PrepTime from './PrepTime';
import DishType from './DishType';

class FormDish extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.state.default;
  }

  onOptionSelect = (compState) => {
    this.setState({
      ...this.props.state.conditionals,
      ...compState
    })
  }

  onConditionChange = (compState) => {
    if(compState) {
      this.setState({
        ...compState
      })
    }
  }

  adjustRequest = (request) => {
    const finalRequest = {};

    for (const prop in request) {
      if(request[prop] && request[prop] !== '') {
        finalRequest[prop] = request[prop]
      }
    }

    return finalRequest;
  }

  onFormSubmit = async (e) => {
    e.preventDefault();
    this.props.startLoading();

    await fetch('https://frosty-wood-6558.getsandbox.com:443/dishes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.adjustRequest(this.state))
    })
    .then(response => response.json()) 
    .then(data => {
      if(data.id) {
        this.props.sendData(data);
        this.setState({
          ...this.props.state.default
        })
      } else {
        this.props.sendData({});
        this.setState({ error: data })
      }
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} id="dish-form" className="ui form container">
          <DishName 
            value={this.state.name} 
            onChange={this.onConditionChange}
            validator={this.state.error.name} 
          />
          <PrepTime
            value={this.state.preparation_time} 
            onChange={this.onConditionChange}/>
          <DishType 
            value={this.state.type}
            onChange={this.onOptionSelect} 
          />

          {this.state.type === 'pizza' ?
            <PizzaConditionals
              value={{
                no_of_slices: this.state.no_of_slices,
                diameter: this.state.diameter,
              }}
              onChange={this.onConditionChange}
              validator={{
                no_of_slices: this.state.error.no_of_slices,
                diameter: this.state.error.diameter
              }}
            /> :
          this.state.type === 'soup' ?
            <SoupConditionals 
              value={this.state.spiciness_scale}
              onChange={this.onConditionChange}
              validator={this.state.error.spiciness_scale}
            /> :
          this.state.type === 'sandwich' ?
            <SandwichConditionals 
              value={this.state.slices_of_bread}
              onChange={this.onConditionChange}
              validator={this.state.error.slices_of_bread}
            /> : null
          }

          <input className="ui button" type="submit" value="Get Dish" />
      </form>
    );
  }
}

export default FormDish;