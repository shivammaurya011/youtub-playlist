import axios from 'axios';
import { google } from 'googleapis';
import {CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, API_KEY} from '../data'

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: 'https://www.googleapis.com/auth/youtube.readonly',
});

const fetchPlaylists = async (authorizationCode) => {
  try {
    const { tokens } = await oauth2Client.getToken(authorizationCode);
    const accessToken = tokens.access_token;

    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlists?key=${API_KEY}&part=snippet&maxResults=10&mine=true`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data.items;
  } catch (error) {
    console.error('Error fetching playlists:', error);
    return [];
  }
};

export { fetchPlaylists, authUrl };