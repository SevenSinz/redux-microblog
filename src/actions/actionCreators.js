import { SAVE_POST, DELETE_POST, DELETE_COMMENT } from './actionTypes'

export function savePost(blogPost){
    return {
        type: SAVE_POST,
        payload: { blogPost }
    }
}

export function deletePost(id){
    return {
        type: DELETE_POST,
        payload: { id }
    }
}

export function deleteComment(blogPostId, commentId){
    return {
        type: DELETE_COMMENT,
        payload: { blogPostId , commentId}
    }
}