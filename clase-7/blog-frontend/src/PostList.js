import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router'

class PostList extends Component {
    render() {
        return (
            <Row>
                <Col lg={12}>
                    {this.props.posts.map(this.createPostItem)}
                </Col>
            </Row>
        );
    }

    createPostItem(post) {
        return (
            <div className="media" key={post.id}>
                <div className="media-left">
                    <a href="#">
                    </a>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </h4>
                    <small>Por: {post.autor}, <i><span>{post.created_at}</span></i></small>

                    <p className="post-content">
                        {post.content}
                    </p>

                    <p>
                        Comentarios ({post.comments.length}) |
                        &Uacute;ltima actualizaci&oacute;n: <span>{post.updated_at}</span>
                    </p>
                </div>
            </div>
        );
    }

}

export default PostList;