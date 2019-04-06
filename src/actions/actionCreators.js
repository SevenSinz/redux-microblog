import { LOAD_POSTS, LOAD_A_POST, SAVE_POST, DELETE_POST, DELETE_COMMENT, START_LOADING, STOP_LOADING, SHOW_ERR, HIDE_ERR } from './actionTypes'
import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

    // GET ALL OF POSTS ######################
    export function getPostsFromAPI() {
        return async function (dispatch) {
            try {
                const res = await axios.get(`${BASE_URL}/api/posts`);
                let blogPosts = {};
                res.data.map(post => blogPosts[post.id] = post)
                dispatch(gotPosts(blogPosts))
                return blogPosts;
            } catch (err) {
                const errorMessage = err.response.data;
                dispatch(showErr(errorMessage));
            }
        }
    }

    export function gotPosts(blogPosts) {
        return {
            type: LOAD_POSTS,
            payload: { blogPosts }
        }
    }
    //############# END OF GET ALL POSTS

    // GET A POST ######################
    export function getAPostFromAPI(postId) {
        return async function (dispatch) {
            try {
                console.log('inside getAPostFromAPI thunk')
                dispatch(startLoading())
                const res = await axios.get(`${BASE_URL}/api/posts/${postId}`);
                // debugger
                if(res.data.id !== undefined){
                    dispatch(gotAPost(res.data))
                    console.log("res.data = ", res.data)
                    dispatch(stopLoading())
                } else {
                    dispatch(showErr('the blog post you are searching for is not!   '));
                } 
            } catch (err) {
                const errorMessage = err.response.data;
                dispatch(showErr(errorMessage));
            }
        };
    }

    export function gotAPost(blogPost) {
        return {
            type: LOAD_A_POST,
            payload: { blogPost }
        }
    }

    export function startLoading() {
        return {
            type: START_LOADING,
        }
    }

    export function stopLoading() {
        return {
            type: STOP_LOADING
        }
    }
    //#################### END OF GET A POST

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

    // HANDLE ERROR ##########################

    export function showErr(errorMessage) {
        return {
            type: SHOW_ERR,
            payload: { errorMessage }
        }
    }

    export function hideErr() {
        return {
            type: HIDE_ERR,
        }
    }
    //################## END OF HANDLE ERROR
