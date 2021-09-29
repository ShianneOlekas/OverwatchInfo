import './Welcome.scss'
import IconScroll from '../IconScroll/IconScroll';
import { Parallax } from 'react-scroll-parallax';

function Welcome() {

    const overwatchRendered = 
    <Parallax
    y={[-60, 5]}
    >
        <div className='letters'>
            <div className='letters__top' />
                <span className='letters__overwatch'>
                <Parallax
                    className='letters__individual'
                >
                    to overwatch fanwiki
                </Parallax>
                </span>
            <div className='letters__bottom' />
        </div>
    </Parallax>

    


    return (
        <main className='welcome'>
            <div className="welcome__title animate">
                <div>Welcome</div>
                <span>Welcome</span>
            </div>
            {overwatchRendered}
            <IconScroll/>
        </main>
    );
}

export default Welcome;