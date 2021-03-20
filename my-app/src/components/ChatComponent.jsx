import { Avatar } from '@material-ui/core';
import React from 'react';
import './Chat.css'

const ChatComponent = ({pic,name,status, min}) => {
    return (
        <div className='chat'>
            <Avatar src={pic}/>
            <div>
                <h4 className='name__style'>{name}</h4>
                <span>{status}</span>
            </div>
            <div className="">
                <p>{min}</p>
            </div>

            
        </div>
    );
};

export default ChatComponent;