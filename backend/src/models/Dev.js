const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');
const RepoSchema = require('./utils/RepoSchema');

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    blog: String,
    avatar_url: String,
    techs:[String],
    location: {
        type: PointSchema,
        index: '2dsphere',
    },
    repos: {
        name: RepoSchema,
    },
});

module.exports = mongoose.model('Dev', DevSchema);