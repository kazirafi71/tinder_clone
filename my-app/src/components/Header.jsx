import React from "react";
import PeopleIcon from "@material-ui/icons/People";
import ForumIcon from "@material-ui/icons/Forum";

import { IconButton } from "@material-ui/core";
import './Header.css'
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';

const Header = ({backButton}) => {
  console.log(backButton)
  const history=useHistory()
  return (
    <div className="header__item">
      {
        backButton ? 
        <IconButton onClick={()=>{history.push(backButton)}}>
        <ArrowBackIosOutlinedIcon />
        </IconButton> : 
<Link to='/'>
      <IconButton>
          <PeopleIcon/>
      </IconButton>
      </Link>
      }
      
      <Link to='/'>
      <img className='tinder__logo' src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg" alt="tinder_logo" srcset=""/>
      </Link>
      <Link to='/chat'>
      <IconButton>
          <ForumIcon/>
      </IconButton>
      </Link>
    </div>
  );
};

export default Header;
