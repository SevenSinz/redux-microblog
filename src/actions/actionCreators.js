import { LOAD_POSTS, SAVE_POST, DELETE_POST, DELETE_COMMENT } from './actionTypes'
import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export function getPostsFromAPI() {
    try {
        
        console.log("we are in thunk!")
        return async function (dispatch) {
            const res = await axios.get(`${BASE_URL}/api/posts`);
            // console.log("thunk res.data", res.data)
            // console.log("thunk res.data spread", {...res.data})
            let blogPosts = {};
            res.data.map(post => blogPosts[post.id]=post)
            console.log("thunk blogPosts", blogPosts)

            dispatch(gotPosts(blogPosts))
        };

    } catch (err) {
        // const errorMessage = err.response.data;
        // dispatch(showErr(errorMessage));
        return `api down!, ${err}`
    }
}


export function gotPosts(blogPosts) {
    // debugger
    console.log("gotPosts blogPosts", blogPosts)

    return {
        type: LOAD_POSTS,
        payload: { blogPosts }
    }
}

export function savePost(blogPost) {
    return {
        type: SAVE_POST,
        payload: { blogPost }
    }
}

export function deletePost(id) {
    return {
        type: DELETE_POST,
        payload: { id }
    }
}

export function deleteComment(blogPostId, commentId) {
    return {
        type: DELETE_COMMENT,
        payload: { blogPostId, commentId }
    }
}