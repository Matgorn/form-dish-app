import { Component } from "react";

class SandwichConditionals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slices_of_bread: 0
    }
  }

  onBreadChange = async (e) => {
    await this.setState({
      slices_of_bread: e.target.valueAsNumber
    })
    this.props.onChange(this.state);
  }

  render() {
    return(
      <div>
        <label htmlFor="bread-slices">Number of slices: </label>
        <input
          onChange={this.onBreadChange}
          value={this.state.slices_of_bread} 
          name="bread-slices" 
          id="bread-slices" 
          type="number" 
          min="1" 
          max="10" 
        />
      </div>
    );
  }
}

export default SandwichConditionals;