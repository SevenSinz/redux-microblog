import { LOAD_POSTS, LOAD_A_POST, SAVE_POST, DELETE_POST, DELETE_COMMENT, START_LOADING, STOP_LOADING, SHOW_ERR, HIDE_ERR } from './actions/actionTypes'

// const INITIAL_STATE = { loading: false, blogPosts: {} };
const INITIAL_STATE = { blogPosts: {}, loading: true, errorMessage: '' };

function reducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case START_LOADING:
            return {...state, loading: true};

        case STOP_LOADING:
            return {...state, loading: false};

        case LOAD_POSTS: {
           return { ...state, blogPosts: action.payload.blogPosts }
        }

        case LOAD_A_POST: {
            return { ...state, blogPosts: { ...state.blogPosts, [action.payload.blogPost.id]: action.payload.blogPost } }
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

        case SHOW_ERR: {
            return { ...state, errorMessage: action.payload.errorMessage }
        }
        
        case HIDE_ERR: {
            return { ...state, errorMessage: '' }
        }

        default:
            return state;
    }
}

export default reducer;