import { SAVE_POST, DELETE_POST } from './actionTypes'


export function savePost(blogPost){
    console.log("blogPost actions", blogPost)
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
