import 'dotenv/config';
import SpotifyAPI from "spotify-api.js";
const client = new SpotifyAPI.Client({ 
  token: { clientID: process.env.SPOTIFY_CLIENT_ID, clientSecret: process.env.SPOTIFY_SECRET },
  onReady() {
      console.log("Connected to Spotify")
  }
}) 

export {
  SpotifyAPI,
  client
}