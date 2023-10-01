const { searchSongs } = require('./spotifyAPI');

// Handle a route that requires Spotify API interaction
app.get('/search-songs', async(req, res) => {
    const token = process.env.CUSTOM_TOKEN;
    const query = req.query.query; // Get the search query from the request

    try {
        // Use the searchSongs function to search for songs
        const songs = await searchSongs(token, query);
        res.status(200).json({ songs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to search for songs' });
    }
});