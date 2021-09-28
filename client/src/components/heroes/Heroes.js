import './Heroes.scss'
import { Parallax } from 'react-scroll-parallax';

function Heroes({ heroes }) {
 
    const heroesRendered = heroes?.map((hero) => (
        // <section className='heroes'>
            <div className={[hero.styleClass, 'heroes'].join(" ")}>
            <Parallax
            x={[-20, 30]}
            >
                <h1 className='heroes__name'>{hero.name}</h1>
                <img src={hero.image} alt='hero' className='heroes__img'/>
            </Parallax>
            <Parallax
            x={[90, -10]}
            >
                <p className='heroes__tagline'>{hero.tagline}</p>
            </Parallax>
            <div className='heroes__info-container'>
                <h2 className='heroes__age'>AGE {hero.age}</h2>
                <p>Origin: {hero.origin}</p>
                <p>Occupation: {hero.occupation}</p>
                <p>Affiliation: {hero.affiliation}</p>
                <p>{hero.backstory}</p>
            </div>
            </div>
        // </section>
        ));

    return (
        <main >
                {heroesRendered}
        </main>
    );
}

export default Heroes;