import React from 'react'


let Links=(props)=>{
    console.log(props.data)
    let link=props.data.map((el)=>{
        return <a href="#"><li>{el}</li></a>
    })
    return <ul>{link}</ul>
}

export {Links}