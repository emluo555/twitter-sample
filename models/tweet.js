const mongoose = require('mongoose')

const tweetSchema = new mongoose.Schema({
    text: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true
    },
})

const Tweet = mongoose.model('Tweet', tweetSchema)

module.exports = Tweet
