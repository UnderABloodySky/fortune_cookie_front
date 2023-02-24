import React from 'react';
import myImage from './cf.png';

class Button extends React.Component {
  render() {
    return (
      <button className={this.props.className} onClick={this.props.onClick}>
        {this.props.children}
        Get a Phrase!
        <img
          src={myImage}
          alt="A cookie"
          style={{ position: "relative", top: "-5px", left: "5px", width: "60px" }}
  />
      </button>
    );
  }
}

export default Button;
