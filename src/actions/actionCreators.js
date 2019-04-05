import { LOAD_POSTS, LOAD_A_POST, SAVE_POST, DELETE_POST, DELETE_COMMENT } from './actionTypes'
import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export function getPostsFromAPI() {
    try {
        let blogPosts = async function (dispatch) {
            const res = await axios.get(`${BASE_URL}/api/posts`);
            console.log("getPostsFromAPI thunk happening")
            let blogPosts = {};
            res.data.map(post => blogPosts[post.id]=post)
            dispatch(gotPosts(blogPosts))
        };
        return blogPosts;

    } catch (err) {
        // const errorMessage = err.response.data;
        // dispatch(showErr(errorMessage));
        return `api down!, ${err}`
    }
}

export function gotPosts(blogPosts) {
    return {
        type: LOAD_POSTS,
        payload: { blogPosts }
    }
}

export function getAPostFromAPI(postId) {
    // try {
        console.log("we are in action creator getAPostFromAPI!", postId)
        return async function (dispatch) {
            console.log("in anon thunk from getAPostFromAPI")
            const res = await axios.get(`${BASE_URL}/api/posts/${postId}`);
            console.log("thunk got results", res)
            dispatch(gotAPost(res.data))
        };

    // } catch (err) {
        // const errorMessage = err.response.data;
        // dispatch(showErr(errorMessage));
        // return `api down!, ${err}`
    // }
}

export function gotAPost(blogPost) {
    // debugger
    console.log("gotAPost blogPost", blogPost)

    return {
        type: LOAD_A_POST,
        payload: { blogPost }
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