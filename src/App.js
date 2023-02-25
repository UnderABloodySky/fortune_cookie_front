import React from 'react';
import axios from 'axios';
import Button from './Button';
import Swal from 'sweetalert2';
import './App.css';
import myImage from './fortune_cookie.png';

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
          imageUrl: myImage,
          imageAlt: "Other cookie",
          customClass: {
            image: 'my-custom-class',
            imageSize: 'image-size',
            swal2Popup: 'swal2-popup', // Agrega la clase 'swal2-popup',
            title: 'my-custom-title-class',
            content: 'my-custom-content-class'
          }
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="container"> {/* agregar clase container */}
        <Button className="my-button" onClick={this.handleButtonClick}/>
      </div>
    );
  }
}

export default App;
