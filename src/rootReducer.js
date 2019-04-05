import { SAVE_POST, DELETE_POST, DELETE_COMMENT } from './actionTypes'

const INITIAL_STATE = { blogPosts: {} };

function rootReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case SAVE_POST: {
            return { ...state, blogPosts: { ...state.blogPosts, [action.payload.blogPost.id]: action.payload.blogPost } }
        }

        case DELETE_POST: {
            let newBlogPosts = { ...state.blogPosts }
            delete newBlogPosts[action.payload.id];
            return { ...state, blogPosts: newBlogPosts }
        }

        case DELETE_COMMENT: {
            let newComments = state.blogPosts[action.payload.blogPostId].comments.filter(c => c.commentId !== action.payload.commentId)
            let newBlogPosts = { ...state.blogPosts }
            let newBlogPost = { ...newBlogPosts[action.payload.blogPostId], comments: newComments };
            return { ...state, blogPosts: { ...state.blogPosts, [newBlogPost.id]: newBlogPost } }
        }

        default:
            return state;
    }
}

export default rootReducer;