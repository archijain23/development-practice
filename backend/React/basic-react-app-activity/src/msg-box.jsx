import React from 'react';
export default function MsgBox({username, textcolor}){
    let styles={color:textcolor}
    return(
        <h1 style={styles}>Hello, {username}</h1>
    )
}