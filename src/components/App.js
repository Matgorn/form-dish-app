import { Component } from 'react';
import './App.css';
import state from './state';
import FormDish from './FormDish';
import Response from './Response';
import Loading from './Loading';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      load: false
    }
  }

  renderResult = () => {
    if(this.state.load === true) {
      return <Loading />
    }
    if(this.state.data.id) {
      return <Response data={this.state.data} />
    }

    return ''
  }

  startLoading = () => {
    this.setState({
      load: true
    })
  }

  getData = async (data) => {
    if(data) {
      await this.setState({
        data,
        load: false
      });
    }
  }

  render() {
    return (
      <div className="container">
        <FormDish 
          state={state} 
          sendData={this.getData}
          startLoading={this.startLoading} 
        />
        {this.renderResult()}
      </div>
    );
  }
}

export default App;