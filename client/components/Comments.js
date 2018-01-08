import React from 'react';

class Comments extends React.Component {
    constructor(props){
        super(props);
        console.log(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const postId = this.props.postId;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;

        console.log("dispathing create comment", postId, author,comment);

        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    }

    render(){
        console.log("comments");
        console.log(this.props.postComments);
        const commentElements = this.props.postComments.map( (comment, i) => {
            return (
                <div className="comment" key={i}>
                    <p>
                        <strong>{comment.user}</strong>{comment.text}
                        <button className="remove-comment" onClick={() => this.props.removeComment(this.props.postId, i)}>&times;</button>
                    </p>
                </div>
            )
        })
        return (
            <div className="comments">
                {
                     commentElements
                }
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment" />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Comments;