import React, { Component } from 'react';
import { hideErr } from '../actions/actionCreators';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";


class Error extends Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(){
        this.props.hideErr();
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                {this.props.errorMessage}
                <Link to="/">
                    <button type="button" onClick={this.handleClick}>
                        ok!
                    </button>
                </Link>           
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        errorMessage: state.errorMessage
    }
}

let mapDispatchToProps = {
    hideErr,
}

export default connect(mapStateToProps, mapDispatchToProps)(Error);