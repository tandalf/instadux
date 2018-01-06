import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Link to="/" ><h1>InstaDux</h1></Link>
            </div>
        )
    }
}

export default Main;