import './IconScroll.scss'
import { Parallax } from 'react-scroll-parallax';
import anaIcon from '../../assets/icons/Ability-ana2.png';
import sigmaIcon from '../../assets/icons/Abilities-sigma5.png';
import doomfistIcon from '../../assets/icons/Ability_Doomfist_Meteor_Strike.png';
import moiraIcon from '../../assets/icons/Ability_Moira_Fade.png';
import orisaIcon from '../../assets/icons/Ability_Orisa_Supercharger.png'

function IconScroll() {

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
        y={[-10, -200]}
    >
        <img src={doomfistIcon} className='icon icon__doomfist'/>
    </Parallax>

    const orisaScroll = 
    <Parallax
        y={[-20, -100]}
    >
        <img src={orisaIcon} className='icon icon__orisa'/>
    </Parallax>

    // const checkpoint = 300;

    // window.addEventListener('scroll', () => {
    //     const currentScroll = window.scrollY;
    //     const opacity = document.querySelector('.front').style.opacity;
    //     if (currentScroll <= checkpoint) {
    //         opacity = 1 - currentScroll / checkpoint;
    //     } else {
    //         opacity = 0;
    //     }
        
    // });

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
                <div className='banner__one'></div>
                <div className='banner__two front'></div>
            </div>
        </section>
    );
}

export default IconScroll;