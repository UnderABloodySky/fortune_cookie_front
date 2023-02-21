import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        Get a Phrase!
      </button>
    );
  }
}

export default Button;


