import React from 'react'
import axios from 'axios';


function results() {
    return (
        axios.create(
        {
            baseURL:"https://challenge-ea4ca.firebaseio.com/"
        }
        )
    )
}

export default results
