import React from 'react';
import ChatComponent from './ChatComponent';

const Chats = () => {
    return (
        <div>
            <ChatComponent
            pic='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
            name='xyz'
            status='hello world'
             min='10 minutes ago'
            />
            <ChatComponent
            pic='https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
            name='xyz'
            status='hello world'
             min='10 minutes ago'
            />
            <ChatComponent
            pic='https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
            name='xyz'
            status='hello world'
             min='10 minutes ago'
            />
            <ChatComponent
            pic='https://unsplash.com/photos/OhKElOkQ3RE'
            name='xyz'
            status='hello world'
             min='10 minutes ago'
            />
        </div>
    );
};

export default Chats;