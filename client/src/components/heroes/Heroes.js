import './Heroes.scss'
import { Parallax } from 'react-scroll-parallax';

function Heroes({ heroes }) {
 
    const heroesRendered = heroes?.map((hero) => (
            <div id={hero.id} className={[hero.styleClass, 'heroes'].join(" ")}>
                <Parallax
                x={[-30, 10]}
                >
                    <div className='heroes__container'>
                        <p className='heroes__tagline'>{hero.tagline}</p>
                        <img src={hero.image} alt='hero' className='heroes__img'/>
                        <h1 className='heroes__name'>{hero.name}</h1>
                    </div>
                </Parallax>
                <div className='heroes__info-container'>
                    <h2 className='heroes__age'>AGE {hero.age}</h2>
                    <p>Origin: {hero.origin}</p>
                    <p>Occupation: {hero.occupation}</p>
                    <p>Affiliation: {hero.affiliation}</p>
                    <p className='heroes__backstory'>{hero.backstory}</p>
                </div>
            </div>
        ));

    return (
        <main className='all-heroes'>
                {heroesRendered}
        </main>
    );
}

export default Heroes;