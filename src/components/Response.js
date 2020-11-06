import './Response.css';
import { Component } from 'react';

import { faPizzaSlice, faHamburger, faMugHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Response extends Component {
  showResponse = (result = []) => {
    const data = this.props.data;

    for(const prop in data) {
      if(prop !== 'error') {
        if(data[prop] === 'pizza') {
          result.push(
            <div key={prop} className="field result-field">
              <h4>{prop.toUpperCase()}</h4>
              <span><FontAwesomeIcon icon={faPizzaSlice} /></span>
            </div>
          )
        } else if (data[prop] === 'sandwich') {
          result.push(
            <div key={prop} className="field result-field">
              <h4>{prop.toUpperCase()}</h4>
              <span><FontAwesomeIcon icon={faHamburger} /></span>
            </div>
          )
        } else if (data[prop] === 'soup') {
          result.push(
            <div key={prop} className="field result-field">
              <h4>{prop.toUpperCase()}</h4>
              <span><FontAwesomeIcon icon={faMugHot} /></span>
            </div>
          )
        } else {
          result.push(
            <div key={prop} className="field result-field">
              <h4>{prop.toUpperCase()}</h4>
              <h4>{data[prop]}</h4>
            </div>
          )
        }
      }
    }
    return result;
  }

  render() {
    return (
      <div className="response">
        <h3>Server Response</h3>
        <div className="ui card container">
          {this.showResponse()}
        </div>
      </div>
    );
  }
}
export default Response;