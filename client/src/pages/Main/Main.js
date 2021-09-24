import { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import axios from 'axios';
import Heroes from '../../components/heroes/Heroes';
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
          <Welcome />
          <Heroes heroes={this.state.heroes}/>
        </ParallaxProvider>
      </div>
    );
  }
}

export default Landing;