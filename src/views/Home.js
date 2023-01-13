import React from 'react'
import Navbar from '../components/Navbar'
import Card1 from '../components/Card1'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import {isEqual} from 'lodash'
import Bucket from '../components/Bucket'
import "./Home.css"
function Home(props) {

    const data = useSelector(state => state.cardApp,isEqual)
    console.log(data)
    let hist = []

    const bucketHandler = (h)=>{
        hist = h
        console.log(h);
        props.onHistory(hist)
    }
    return (<>
        <Navbar />
        <div className="one">
            <Bucket onBucket={bucketHandler} data={data.cardData}></Bucket>
            <Card />
        </div>
    </>
    )
}

export default Home
