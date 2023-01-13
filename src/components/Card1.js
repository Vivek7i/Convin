import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { DeleteCard } from "../actions/index"
import Modal from './Modal'
import {history} from '../actions/index'

const Card1 = (props) => {
  
  let dispatch = useDispatch();
  const [d, setd] = useState(props.data)
  const [open, setOpen] = useState(false)
  return (
    
    <div>
            <div className="card" style={{ width: "28rem", height: "35rem" }}>
              <iframe width="500" height="315" src={d.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <div className="card-body">
                <h3 className="card-title">{d.title}</h3>
                <p className="card-text">{d.description}</p>
                <button class="btn"><i class="fa fa-plus"></i>edit</button>
                <button class="btn" onClick={() => { dispatch(DeleteCard(d)) }}><i class="fa fa-trash"></i> delete</button>
                <button onClick={()=>{
                  setOpen(true);
                  console.log({title:d.title,link:d.link,description:d.description,bucket:d.bucket},"hoiioi")
                  dispatch(history({title:d.title,link:d.link,description:d.description,bucket:d.bucket}))
                }} type="button" class="btn btn-primary">
                  PLAY VIDEO
                </button>
                {open&&<Modal dat={d} close={setOpen}/>}
              </div>
            </div>
    </div>
  )
}
export default Card1