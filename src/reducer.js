import { LOAD_POSTS, SAVE_POST, DELETE_POST, DELETE_COMMENT } from './actions/actionTypes'

const INITIAL_STATE = { blogPosts: {} };

function reducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case LOAD_POSTS: {
           return { ...state, blogPosts: action.payload.blogPosts }
        }

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

export default reducer;