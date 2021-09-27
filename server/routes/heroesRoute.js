const express = require('express')
const router = express.Router();
const fs = require('fs');

const heroesFilePath = './data/heroes.json';

const getHeroes = () => {
    const fileContent = fs.readFileSync(heroesFilePath)
    const parsedFileContent = JSON.parse(fileContent)
    return parsedFileContent; 
}

router.get('/', (_req, res) => {
    try {
        const heroData = getHeroes().map((hero) => {
            return {
                name: hero.name,
                image: hero.image,
                age: hero.age,
                occupation: hero.occupation,
                origin: hero.origin,
                affiliation: hero.affiliation,
                tagline: hero.tagline,
                backstory: hero.backstory,
                styleClass: hero.styleClass
            }
        })
    return res.status(200).json(heroData)
    } catch(err) {
        return res.status(500).json({error: 'file cant be read'})
    }
})

// router.get('/:id', (req, res) => {
//     try {
//         const videoData = getVideoData().find(video => video.id === req.params.id)
//     return res.status(200).json(videoData)
//     } catch(err) {
//         return res.status(500).json({error: 'file cant be read'})
//     }
// })

module.exports = router;