export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
}

const reducer = (state, action) => {

    console.log(state);
    console.log(action);

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };

        case "DISCOVER_WEEKLY":
            return {
                ...state,
                discoverweekly: action.discoverweekly,
            };

        default:
            return {
                ...state,
            };
    }
    console.log(state);
    console.log(action);
};

export default reducer;