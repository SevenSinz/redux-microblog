import React, { Component } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { Link } from "react-router-dom";

import uuid from 'uuid/v4';


class PostFormEditAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
                id: uuid(),
                title: "",
                description: "",
                body: "",
                comments: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        console.log("FormPostEditAdd blogPost?", this.state);
        this.props.handleSavePost(this.state);
        this.props.history.push('/');
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }
    
    // handleChange(evt) {
    //     this.setState({
    //         blogPost: {...this.state.blogPost, [evt.target.name]: evt.target.value}
    //     })
    // }

    componentDidMount() {
        if (this.props.blogPost) {
            this.setState( this.props.blogPost )
        }
    }

    render() {

        console.log("FormPostEditAdd props = ", this.props);
        console.log("FormPostEditAdd state = ", this.state);


        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <section>
                        <Card>
                            <CardBody>
                                <CardTitle className="font-weight-bold text-center">

                                </CardTitle>

                                <div>
                                    <label htmlFor="title" />
                                    <input id="title"
                                        name="title"
                                        placeholder="title"
                                        value={this.state.title}
                                        onChange={this.handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="description" />
                                    <input id="description"
                                        name="description"
                                        placeholder="Description"
                                        value={this.state.description}
                                        onChange={this.handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="body" />
                                    <input id="body"
                                        name="body"
                                        placeholder="body"
                                        value={this.state.body}
                                        onChange={this.handleChange} />
                                </div>

                                <button > Save </button>
                                <Link to="/">
                                    <button type="button"> Cancel </button>
                                </Link>

                            </CardBody>
                        </Card>
                    </section>

                </form>
            </div>
        );
    }
}

export default PostFormEditAdd;