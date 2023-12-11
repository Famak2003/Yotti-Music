const { searchSongs } = require('./spotifyAPI');

// Handle a route that requires Spotify API interaction
async function searchSongsRoute(req, res) {
    const token = process.env.SPOTIFY_API_TOKEN;
    const query = req.query.query; // Get the search query from the request

    try {
        // Use the searchSongs function to search for songs and return the entire JSON response
        const response = await searchSongs(token, query);

        // Extract only the necessary information (track name, album, artist) from the response
        const simplifiedTracks = response.tracks.items.map(item => ({
            trackName: item.name,
            album: item.album.name,
            artist: item.artists[0].name, // Assuming one artist per track
        }));

        res.status(200).json({ tracks: simplifiedTracks });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to search for songs' });
    }
}

module.exports = {
    searchSongsRoute,
};