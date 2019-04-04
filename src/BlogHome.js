import React, { Component } from 'react';
import TitleList from './TitleList';

class BlogHome extends Component {
    render() {
        return (
            <div className="BlogHome container">
                <p className="bg-secondary rounded">
                    Welcome to Microblog, our innovative side for communicating information superhighway
                </p>
                <TitleList titleList={this.props.titleList} />
            </div>
        );
    }
}

export default BlogHome;