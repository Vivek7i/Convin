// import {history} from './Card1'
import React from 'react'
import { useSelector } from 'react-redux';
const History = (props) => {
    console.log(props.hist);
    const dataHistory=useSelector(state=>state.cardApp.history)
    // console.log(dataHistory,"hewhehfwehfw")
  return (
    <div>
      {dataHistory}
      meow
    </div>
  )
}

export default History
