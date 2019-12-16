import React from "react"
import { Card, Image, Button } from 'semantic-ui-react'
const UserItem = ({ user: { id, login, avatar_url, html_url } }) => {
  return (
    <div className='col'>
      <div className='card mt-2 mb-4' style={{ width: "18rem" }}>
		 <div className='card'>
		  
        <img src={avatar_url} alt={login} />
        
          <h5 className='card-title'>{login}</h5>
           <a className='more-btn' href={`/user/${login}`}>
            More
			 </a>
			
        </div>
		 
      </div>
    </div>
  );
};

export default UserItem;