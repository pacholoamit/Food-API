import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation.js'
import Logo from './components/Logo/Logo.js'
import ImageLinkForm from './components/ImageLinkForm/Imagelinkform.js'
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js'
import Register from './components/Register/Register.js'
import Rank from './components/Rank/Rank.js'
import SignIn from './components/SignIn/Signin.js'
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';



const app = new Clarifai.App({
 apiKey:'55045e65e52b4da49d452e4d56a8d00a'
});

const particlesOptions = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 900
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input:'',
      foodUrl: '',
      route: 'signin',
      isSignedIn: false,
      prediction1: {}

    }
  }


  onInputChange = (event) => {
    this.setState({input:event.target.value});
  }
  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(
      Clarifai.FOOD_MODEL,
      this.state.input)

      .then(response => {
      this.setState({Prediction1: response.outputs[0].data.concepts[0].name}); /*MAKE THIS SET.STATE.INPUT*/ 
      })
      .catch(err => {
      console.log(err);
      });

    }

  

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }



  render() {
  return (
    <div className="App">
      <Particles className = "particles"
        params={particlesOptions}
        />
     
      <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
        { this.state.route === 'home' 
        ? <div>
          <Logo />
          <Rank />
          <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit} />
          <div className= 'mt4'>
            Type of Food: <div><b><u>{this.state.Prediction1}</u></b></div>
           </div>
          <FaceRecognition imageUrl={this.state.imageUrl} />
        </div>
        : (
          this.state.route === 'signin'
          ?  <SignIn onRouteChange={this.onRouteChange} />
          :  <Register onRouteChange={this.onRouteChange} />
          )

       
        }
    </div>
    );
  }
}

export default App;
