import { Component } from 'react';

class PizzaConditionals extends Component {
  constructor(props){
    super(props);

    this.state = {
      no_of_slices: 0,
      diameter: 0
    }
  }

  onInputChange = async (e) => {
    if(e.target.id === 'slices') {
      await this.setState({
        no_of_slices: e.target.valueAsNumber
      })
    }
    if(e.target.id === 'diameter') {
      await this.setState({
        diameter: e.target.valueAsNumber
      })
    }
    this.props.onChange(this.state);
  }

  render() {
    return (
      <div>
        <label htmlFor="slices">Number of slices: </label>
        <input 
          onChange={this.onInputChange}
          value={this.no_of_slices}
          name="slices" 
          id="slices" 
          type="number" 
          min="1" 
          max="12" 
        />
  
        <label htmlFor="diameter">Diameter (in CM): </label>
        <input
          onChange={this.onInputChange}
          value={this.state.diameter} 
          name="diameter" 
          id="diameter" 
          type="number" 
          step="0.01" 
        />
      </div>
    );
  }
}

export default PizzaConditionals;