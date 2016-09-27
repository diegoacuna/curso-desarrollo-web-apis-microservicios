import React, { Component } from 'react';
import PostList from './PostList';

class PostListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    render() {
        return (
            <PostList posts={this.state.posts} />
        );
    }

    componentDidMount() {
        var _this = this;
        fetch('http://localhost:3001/posts').then((response) => {
            return response.json()
        }).then((data) => {
            _this.setState({posts: data})
        });
    }

}

export default PostListContainer;