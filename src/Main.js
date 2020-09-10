import React, { useState, useEffect } from "react"
import Axios from "axios"

const defaultImage = "https://cdn.freebiesupply.com/logos/large/2x/nasa-2-logo-png-transparent.png"
//const apiURL = "https://jsonplaceholder.typicode.com/photos/"
//const apiURL = "https://api.nasa.gov/planetary/apod?api_key=kgnGjMWDbpcXaD0UI92TbBpkfQC1lsztLi70JPcy"
const apiURL = "https://api.nasa.gov/planetary/apod?concept_tags=True&api_key=kgnGjMWDbpcXaD0UI92TbBpkfQC1lsztLi70JPcy&date="

function Main() {
    const [date, setDate] = useState('')
    const [dailyImage, setDailyImage] = useState(defaultImage)
    const [dailyTitle, setDailyTitle] = useState('')
    const [dailyText, setDailyText] = useState('')

    const fetchImage = () => {
    //    let random = Math.floor(Math.random() * 5001)
        const d = new Date()
        const mm = d.getMonth() + 1
        const dd = d.getDate()
        const yy = d.getFullYear()
        const today = `${yy}-${mm}-${dd}`

        // console.log(apiURL + today)
        Axios
            .get(apiURL + today)// + random)
            .then(({ data }) => {
                setDate(data.date)
                setDailyImage(data.url)
                setDailyTitle(data.title)
                setDailyText(data.explanation)
                console.log(data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }

    useEffect(() => {
        fetchImage()
    }, [])

    return (
        <main>
            <h2>{date}</h2>
            <img src={dailyImage} alt="Nasa Logo" width="500px"></img>
            <h2>{dailyTitle}</h2>
            <p>{dailyText}</p>
           {/* <button onClick={fetchImage}>Fetch Image</button> */}
        </main>
    )
}

export default Main