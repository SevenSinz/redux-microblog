import { SAVE_POST, DELETE_POST } from './actionTypes'

const INITIAL_STATE = { blogPosts: {} };

function rootReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case SAVE_POST:
            return { ...state, blogPosts: { ...state.blogPosts, [action.payload.blogPost.id]: action.payload.blogPost } }

        case DELETE_POST:
            let newBlogPosts = { ...state.blogPosts }
            delete newBlogPosts[action.payload.id];
            return { ...state, blogPosts: newBlogPosts }

        default:
            return state;
    }
}

export default rootReducer;


