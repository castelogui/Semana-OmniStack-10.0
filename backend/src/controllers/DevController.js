const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

module.exports = {
    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },
    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;
        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            
            // const apiResponseRepos = await axios.get(`https://api.github.com/users/${github_username}/repos`)
            
            //continuar
            const { name = login, avatar_url, bio } = apiResponse.data;
            
            // const repo = apiResponseRepos.data;

            // const reposArray = parseStringAsArray(repo);

            // const { full_name } = reposArray
            
            const techsArray = parseStringAsArray(techs);
    
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
             
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
                // repos: full_name
            })

            // Filtrar as conexões que estao a no max 10km de distancia
            // e que novo dev tenha pelo mennos uma das tecnologias filtradas 

            const sendSocketMassageTo = findConnections(
                { latitude, longitude },
                techsArray,
            )

            sendMessage(sendSocketMassageTo, 'new-dev', dev);
        }
        return response.json(dev);
    }
};




// index, show, store, update, destroy