import React from 'react';
import { Link } from 'react-router';

import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const posts = this.props.posts;
        const params = this.props.params;
        const i = posts.findIndex(post => post.code == params.postId);
        const post = posts[i];
        return (
            <div className="single-photo">
                <Photo {...this.props} key={i} i={i} post={post}/>
                <Comments />
            </div>
        )
    }
}

export default Single;