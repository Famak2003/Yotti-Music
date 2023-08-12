const axios = require('axios');
const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    const { title, artist } = req.query;
    const apiKey = process.env.API_KEY;

    try {
        const response = await axios.get(
            `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=json&apikey=${apiKey}&q_track=${title}&q_artist=${artist}`
        );

        const lyrics = response.data.message.body.lyrics.lyrics_body;
        res.status(200).json({ lyrics });
        console.log(response.data);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching lyrics.' });
    }
});

module.exports = router;