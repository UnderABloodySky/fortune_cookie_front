import './App.css';
import React from 'react';
import axios from 'axios';
import Button from './Button';
import Swal from 'sweetalert2';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    axios
      .get('http://localhost:4567/')
      .then(response => {
        Swal.fire({
          title: response.data.phrase,
          text: "The Fortune Cookie Says...",
          imageUrl: 'success',
          imageHeight: 80, 
          imageWidth: 80,       
          imageClass:'img-responsive rounded-circle',        
          animation: false,
          imageAlt: "Cookie fortune"    
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleButtonClick}>
          Get a Phrase!
        </Button>
        <img src="logo.svg"/>
      </div>
    );
  }
}

export default App;
