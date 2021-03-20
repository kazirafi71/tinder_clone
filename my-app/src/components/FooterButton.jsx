import { IconButton } from '@material-ui/core';
import React from 'react';
import ReplayOutlinedIcon from '@material-ui/icons/ReplayOutlined';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import FlashOnOutlinedIcon from '@material-ui/icons/FlashOnOutlined';
import './Footer.css'


const FooterButton = () => {
    return (
        <div className='footer__icon'>
            <IconButton className='reply__icon' >
                <ReplayOutlinedIcon color='orange'  />
            </IconButton>
            <IconButton className='clear__icon'>
                <ClearOutlinedIcon  />
            </IconButton>
            <IconButton className='star__icon'>
                <StarOutlinedIcon  />
            </IconButton>
            <IconButton className='fav__icon'>
                <FavoriteOutlinedIcon  />
            </IconButton>
            <IconButton className='flash__icon'>
                <FlashOnOutlinedIcon  />
            </IconButton>
        </div>
    );
};

export default FooterButton;