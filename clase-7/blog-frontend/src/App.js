import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import PostListContainer from './PostListContainer';

class App extends Component {
    render() {
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
                <PostListContainer />
            </Grid>
        );
    }
}

export default App;