import React, { useState, useEffect } from "react"
import Axios from "axios"
import styled, { keyframes } from 'styled-components'

const defaultImage = "https://cdn.freebiesupply.com/logos/large/2x/nasa-2-logo-png-transparent.png"
const apiURL = "https://api.nasa.gov/planetary/apod?concept_tags=True&api_key=kgnGjMWDbpcXaD0UI92TbBpkfQC1lsztLi70JPcy&date="

function todayDate() {
    const d = new Date()
    const mm = d.getMonth() + 1
    const dd = d.getDate()
    const yy = d.getFullYear()
    return `${yy}-${mm}-${dd}`
}

function Main() {
    const [date, setDate] = useState('')
    const [dailyImage, setDailyImage] = useState(defaultImage)
    const [dailyTitle, setDailyTitle] = useState('')
    const [dailyText, setDailyText] = useState('')
    const [newDate, setNewDate] = useState('')

    const fetchImage = (date) => {
        Axios
            .get(apiURL + date)
            .then(({ data }) => {
                setDate(data.date)
                setDailyImage(data.url)
                setDailyTitle(data.title)
                setDailyText(data.explanation)
                setNewDate('')
                console.log(data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    // This runs on page load
    useEffect(() => {
        // Pass in todays date
        fetchImage(todayDate())
    }, [])


    // This runs when the button is clicked
    const fetchImageByDate = () => {
        // This function is called by the button click function aka click handler handler
        // newDate is the variable that has been set to the date typed by the user
        // and passed to fetchImage function
        fetchImage(newDate)
    }

    return (
        <StyledMain>
            <h2>{date}</h2>
            <br />
            <img src={dailyImage} alt="Nasa Logo" width="500px"></img>
            <h2>{dailyTitle}</h2>
            <p>{dailyText}</p>
            <hr />
            <input onChange={(e) => setNewDate(e.target.value)} value={newDate} placeholder="YYYY-MM-DD" />
            <button onClick={fetchImageByDate}>Get new image</button>
           {/* <button onClick={fetchImage}>Fetch Image</button> */}
        </StyledMain>
    )
}

const StyledMain = styled.main`
    background-color: black;
    color: white;

    h2 {
        font-size: 45px;
        color: mediumaquamarine;
    }
    p {
        width: 50%;
        margin: 0 auto;
    }

    input, button {
        padding: 5px;
        border-radius: 10px;
        width: 200px;
        font-family: 'Josefin Sans', sans-serif;
        color: black;
        font-size: 20px;
    }

    button {
        background-color: white;
        &:hover {
            background-color: mediumaquamarine;
            color: white;
        }
    }
`

export default Main





//const apiURL = "https://jsonplaceholder.typicode.com/photos/"