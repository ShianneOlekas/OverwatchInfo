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
                    // x={['-100px', '100px']}
                    className='letters__individual'
                >
                    overwatch fanwiki
                </Parallax>
                </span>
            <div className='letters__bottom' />
        </div>
    </Parallax>


    return (
        <main className='welcome'>
            <h1 className='welcome__title'>Welcome to</h1>
            {overwatchRendered}
            <IconScroll/>
        </main>
    );
}

export default Welcome;