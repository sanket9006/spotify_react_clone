const authEndpoint ="https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "5023f73588f045349ac2b0733041249b"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

export const authURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

// auth_endpoint + "?" + clientId + "&" + redirectUri  + "&" + "scope=" + scopes.join("%20") +  "&" + "response_type=token "
 