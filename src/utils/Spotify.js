import  {toast}  from 'react-toastify';
const client_id = '9cf58882fec54ff7b65685c88b1b886a';
const redirect_uri = 'http://localhost:3000';
// const redirect_uri="https://www.JammingFatima.surge.sh"
/* These constants store your Spotify application's client ID and the redirect URI. 
The client ID identifies your application to Spotify, 
and the redirect URI is where users will be redirected after they log in with their Spotify account. */
const authorizationUrl = `https://accounts.spotify.com/authorize?client_id=${client_id}` +
  `&redirect_uri=${redirect_uri}&scope=playlist-modify-public&response_type=token`;
  /**This variable constructs the URL for Spotify's authorization endpoint. It includes your client ID, redirect URI, requested scopes (in this case, 'playlist-modify-public'), and the 
   * response type ('token' for Implicit Grant flow). Users will be redirected to this URL for authentication. */
let currentAccessToken = '';
let expirationTimeInSeconds = 0;
/**These variables store the current access token and its expiration time in seconds. 
 * Access tokens are required to make authenticated requests to the Spotify Web API. */
const Spotify={ /** spotify is a object contain different method related web api */
    //*retrieving the access token*/
    getAccessToken: function() {
        if (currentAccessToken) {
          toast.info('Access token already exists: ' + currentAccessToken);
          return currentAccessToken;
        };
        /** ".*? " The regular expression pattern looks for the text "access_token="
         *  followed by any characters (.*?) and terminated by an ampersand &. */
        let accessToken = /access_token=(.*?)&/.exec(window.location.href); // extract information from the URL of the current web page
        let expirationTime = /expires_in=(.*)/.exec(window.location.href);

        if (accessToken && expirationTime) {
          toast.error('Acquired access token: ' + accessToken);
          currentAccessToken = accessToken[1]; //extracts the actual access token
          expirationTimeInSeconds = expirationTime[1]; //extracts the expirationTime  
          window.setTimeout(() => currentAccessToken = '', expirationTimeInSeconds * 1000);
          window.history.pushState('Access Token', null, '/');
          return currentAccessToken;
        } else {
          toast.error('No access token found.');
          return '';
        }
      },
      search: async function(searchTerm) {
        let accessToken = await this.getAccessToken();
        if (!accessToken) {
          toast.error('No access token present.');
          sessionStorage.setItem('searchTerm', searchTerm);
          window.location.replace(authorizationUrl);
          return [];
        }
    
        const term = encodeURI(searchTerm);
        return fetch(`https://api.spotify.com/v1/search?q=${term}&type=track`, {
          headers: { Authorization: `Bearer ${accessToken}` }
        })
        .then(response => {
            if (response.ok) {
              return response.json();
            }
            toast.success("Search query failed.")
            
        }, networkError => toast.error(networkError.message)
        )
        .then(jsonResponse => {
          if (jsonResponse && jsonResponse.tracks) {
            return jsonResponse.tracks.items.map(track => {
              return {
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
              }
            });
          
          }
          else if (jsonResponse && jsonResponse.error) {
            toast.error(`Search query error: ${jsonResponse.error.message}`);
          }
          else {
            return [];
          }
        });
      },
      savePlaylist: async function(playlistName, playlistTracks) {
        if (!playlistName || !playlistTracks || playlistTracks.length === 0) {
          return;
        }
    
        let accessToken = await this.getAccessToken();
        if (!accessToken) {
          toast.error('No access token present.');
          // Save playlist information to session storage here
          window.location.replace(authorizationUrl);
          return;
        }
    
        // Fetch user ID
        const headers = { Authorization: `Bearer ${accessToken}`,
                          Accept: 'application/json',
                          'Content-Type': 'application/json'};
        const userID = await fetch('https://api.spotify.com/v1/me', {
          headers: headers
        })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
         toast.error('Error querying user ID.');
        }, networkError => toast.error(networkError.message)
        )
        .then(jsonResponse => {
          if (jsonResponse && jsonResponse.id) {
            return jsonResponse.id;
          }
          else if (jsonResponse && jsonResponse.error) {
            toast.error(`Error querying user ID: ${jsonResponse.error.message}`);
          }
        });
    
        if (!userID) {
          return;
        }
    
        // Create playlist
        const playlistID = await fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({name: playlistName})
        })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          toast.error(`Error creating playlist ${playlistName}.`);
        }, networkError => toast.error(networkError.message)
        )
        .then(jsonResponse => {
          if (jsonResponse && jsonResponse.id) {
            return jsonResponse.id;
          }
          else if (jsonResponse && jsonResponse.error) {
            toast.error(`Error creating playlist ${playlistName}: ${jsonResponse.error.message}`);
          }
        });
    
        if (!playlistID) {
          return;
        }
    
        // Save tracks to playlist
        const snapshotID = await fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks?`, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({uris: playlistTracks})
        })
        .then(response => {
          if (response.ok) {
            toast.success('Playlist created successfully')
            return response.json();
          }
          toast.error(`Error saving playlist ${playlistName}.`);
        }, networkError => toast.error(networkError.message)
        )
        .then(jsonResponse => {
          if (jsonResponse && jsonResponse.snapshot_id) {
            return jsonResponse.snapshot_id;
          }
          else if (jsonResponse && jsonResponse.error) {
            toast.error(`Error saving playlist ${playlistName}: ${jsonResponse.error.message}`);
          }
        });
    
      }
}
export  {Spotify};