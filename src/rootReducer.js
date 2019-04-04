const INITIAL_STATE = { memes: [] };

function rootReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case "ADD": 
            let addAMeme = [...state.memes, action.payload];
            return { memes: addAMeme };
        
        case "DELETE":
            let deleteAMeme = state.memes.filter(m => m.id !== action.payload.id);
            return { memes: deleteAMeme };

        case "UPDATE":
            let stateMinusUpdated = state.memes.filter(m => m.id !== action.payload.id)
            let updateMeme = [...stateMinusUpdated, action.payload];
            return { memes: updateMeme };

        default:
            return state;
    }
}

export default rootReducer;