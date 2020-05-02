const mongoose = require('mongoose');

const RepoSchema = new mongoose.Schema({
    name: {
        full_name: [String],
    },
});

module.exports = RepoSchema;