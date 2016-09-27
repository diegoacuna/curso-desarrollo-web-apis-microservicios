import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post: {}
        }
    }

    componentDidMount() {
        var _this = this;
        fetch('http://localhost:3001/posts/'+this.props.params.postId).then((response) => {
            return response.json()
        }).then((data) => {
            _this.setState({post: data})
        });
    }

    render() {
        var post = this.state.post;
        return (
            <Grid>
                <Row>
                    <Col lg={12}>
                        <Jumbotron className="text-center">
                            <Grid>
                                <h1>Nuestro Blog</h1>
                                <p>
                                    Blog con Frontend en React (V) y backend en Rails
                                </p>
                            </Grid>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8}>
                        <h1>{post.title}</h1>

                        <p>Por: {post.autor}, <i>{post.created_at}</i></p>

                        <p style={{'fontSize': '15px'}}>
                            {post.content}
                        </p>

                    </Col>

                    <Col lg={4}>
                        <aside style={{'marginTop': '30px'}}>
                            <p>
                                Actualizado: {post.updated_at}
                            </p>
                        </aside>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Post;