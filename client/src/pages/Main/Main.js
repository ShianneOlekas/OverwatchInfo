import { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';
import Heroes from '../../components/heroes/Heroes';
// import HeroList from '../../components/HeroList/HeroList';
import Welcome from '../../components/Welcome/Welcome';

class Landing extends Component {
  state = {
    heroes: []
  }

  componentDidMount() {
    axios
    .get('http://localhost:8080/heroes')
    .then((response) => {
      if(response.status === 200) {
        return this.setState({
          heroes: response.data
        });
      }
    })
  }



  render() {

    return (
      <div>
        <ParallaxProvider>
          <BrowserRouter>
            <Welcome />
            {/* <HeroList heroes={this.state.heroes}/> */}
            <Heroes heroes={this.state.heroes}/>
          </BrowserRouter>
        </ParallaxProvider>
      </div>
    );
  }
}

export default Landing;