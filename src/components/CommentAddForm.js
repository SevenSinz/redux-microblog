import React, { Component } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import uuid from 'uuid/v4';

class CommentAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            commentId: "",
            text: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        //give comment a uuid
        let newComment = { ...this.state };
        newComment.commentId = uuid();

        // add the comment to the copy of blogPost
        let newBlogPost = { ...this.props.blogPost };
        newBlogPost.comments.push(newComment);

        // send copy of blogPost save
        this.props.handleSavePost(newBlogPost);
        this.setState( { 
                        commentId: "",
                        text: "" 
                        });
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <section>
                        <Card>
                            <CardBody>
                                <CardTitle className="font-weight-bold text-center">
                                </CardTitle>

                                <div>
                                    <label htmlFor="text" > Comment: </label>
                                    <input commentId="text"
                                        name="text"
                                        placeholder="New Comment"
                                        value={this.state.text}
                                        onChange={this.handleChange} />
                                </div>
                                <button > Add </button>

                            </CardBody>
                        </Card>
                    </section>
                </form>
            </div>
        );
    }
}

export default CommentAddForm;