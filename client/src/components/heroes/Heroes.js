import './Heroes.scss'

function Heroes({ heroes }) {
 
    const heroesRendered = heroes?.map((hero) => (
        <section className='heroes'>
            <div className={hero.styleClass}>
                <img src={hero.image} alt='hero' className='heroes__img'/>
                <h1 className={hero.styleName}>{hero.name}</h1>
                <h2>AGE {hero.age}</h2>
                <p>{hero.tagline}</p>
                <p>Origin: {hero.origin}</p>
                <p>Occupation: {hero.occupation}</p>
                <p>Affiliation: {hero.affiliation}</p>
                <p>{hero.backstory}</p>
            </div>
        </section>
        ));

    return (
        <main >
                {heroesRendered}
        </main>
    );
}

export default Heroes;