const SpotifyWebApi = require('spotify-web-api-node');
const { playTrack } = require('./spotifyAPI');


// Initialize the Spotify Web API with your credentials
const spotifyApi = new SpotifyWebApi({
    clientId: 'YOUR_CLIENT_ID',
    clientSecret: 'YOUR_CLIENT_SECRET',
});

// Initialize the Spotify Web Playback SDK
const player = new Spotify.Player({
    name: 'Your Spotify Player Name',
    getOAuthToken: (cb) => {
        // You can implement a function to retrieve the access token here
        cb('YOUR_ACCESS_TOKEN');
    },
});

// Set up event handlers for player state changes, e.g., track changes
player.addListener('player_state_changed', (state) => {
    console.log('Current track: ', state.track_window.current_track);
});

// Initialize the player
player.connect().then((success) => {
    if (success) {
        console.log('Connected to Spotify player');
    }
});

// Function to play a track by its Spotify URI
function playTrackByUri(uri) {
    // Get the access token and device ID from your authentication and setup process
    const accessToken = 'YOUR_ACCESS_TOKEN';
    const deviceId = 'YOUR_DEVICE_ID';

    // Use the playTrack function to play the specified track
    playTrack(accessToken, deviceId, uri)
        .then(() => {
            console.log('Track is playing');
        })
        .catch((error) => {
            console.error('Error playing track:', error);
        });
}

module.exports = {
    playTrackByUri,
};