import './IconScroll.scss'
import { Parallax } from 'react-scroll-parallax';
import anaIcon from '../../assets/icons/Ability-ana2.png';
import sigmaIcon from '../../assets/icons/Abilities-sigma5.png';
import doomfistIcon from '../../assets/icons/Ability_Doomfist_Meteor_Strike.png';
import moiraIcon from '../../assets/icons/Ability_Moira_Fade.png';
import orisaIcon from '../../assets/icons/Ability_Orisa_Supercharger.png'
import React, { Component } from 'react';

class IconScroll extends Component {

    constructor(props) {
        super(props);
        this.scrollRef = React.createRef();
    }

    componentDidMount() {
    const checkpoint = 600;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY ;
        
        const myElement = this.scrollRef.current
        if (myElement) {
            const opacity = 1.2 - currentScroll / checkpoint
            myElement.style.opacity = opacity
        }
    });
    }

render() {
    const moiraScroll = 
    <Parallax
        y={[20, -500]}
    >
        <img src={moiraIcon} className='icon icon__moira'/>
    </Parallax>

    const anaScroll = 
    <Parallax
        y={[10, -400]}
    >
        <img src={anaIcon} className='icon icon__ana'/>
    </Parallax>

    const sigmaScroll = 
    <Parallax
        y={[0, -300]}
    >
        <img src={sigmaIcon} className='icon icon__sigma'/>
    </Parallax>

    const doomfistScroll = 
    <Parallax
        y={[10, -400]}
    >
        <img src={doomfistIcon} className='icon icon__doomfist'/>
    </Parallax>

    const orisaScroll = 
    <Parallax
        y={[20, -500]}
    >
        <img src={orisaIcon} className='icon icon__orisa'/>
    </Parallax>


    return (
        <section>
            <div className='icon__line-one'>
                {moiraScroll}
                {anaScroll}
                {sigmaScroll}
                {doomfistScroll}
                {orisaScroll}
            </div>
            <div className='banner'>
                <div className='banner__one' ref={this.scrollRef}></div>
                <div className='banner__two' ></div>
            </div>
        </section>
    );
 }
}

export default IconScroll;