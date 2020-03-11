import React from 'react';
import './App.css';
function Tweet({name,message,hierarchy}){
    return(
        <div className = 'tweet'>
            <h3>{name}</h3>
            <p>{message}</p>
            <h3>{hierarchy}</h3>
        </div>
    )

}
export default Tweet;