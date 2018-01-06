export increment = index => {
    return {
        type: 'INCREMENT_LIKES',
        index
    };
}

export addComment = (postId, author, comment) => {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    };
}

export removeComment = (postId, index) => {
    return {
        type: 'REMOVE_COMMENT',
        postId,
        index
    };
}