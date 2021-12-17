import React from "react";
import {Container, Card} from "react-bootstrap";

const Posts = ({posts, loading}) => {
    if(loading){
        return <h2>Loading...</h2>;
    }

    return(
        <Container>
                {posts.map(post =>(
                    <Card key={post.id} border="info" style={{margin: 10, width:'30%', height:300, padding:5, float: 'left', display: 'inline'}}>
                        <Card.Header style={{textAlign: "center", height: 100}}>{post.title}</Card.Header>
                        <Card.Body>
                        <Card.Text >
                            {post.body}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
        </Container>
    )
}

export default Posts;