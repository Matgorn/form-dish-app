import { Component } from "react";

class SoupConditionals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spiciness_scale: 1
    }
  }

  onSpiceChange = async (e) => {
    await this.setState({
      spiciness_scale: e.target.valueAsNumber
    })
    this.props.onChange(this.state);
  }

  render() {
    return(
      <div>
      <label htmlFor="spiceness">Spiceness scale: </label>
      <input 
        onChange={this.onSpiceChange}
        value={this.state.spiciness_scale}
        name="spiceness" 
        id="spiceness" 
        type="number" 
        min="1" 
        max="10" 
      />
    </div>
    );
  }
}

export default SoupConditionals;