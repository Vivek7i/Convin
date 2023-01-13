import React, { useState, useEffect } from 'react'
// import Form from "../images/Form.svg";
import "./Form.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {addingCard} from '../actions/index'
const Form = () => {

  let navigate = useNavigate()
  let dispatch = useDispatch()

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [bucket, setBucket] = useState('');
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);
  const dummy = [
    {
      link: "xyz",
      description: "description",
      title: "title",
      bucket: "bucket",
    },
  ]
  const [value, setValue] = useState(dummy)
  const addItem = () => {
    if (!title || !description || !link || !bucket) {
      alert('Pleabse fill dataa');
    } else {
      const alltitle = { id: new Date().getTime().toString(), name: title }
      const a={
        title:title,
        description:description,
        link:link,
        bucket:bucket
      }
      const myArray = a.link.replace("watch?v=","embed/");
      a.link=myArray
      const mytitle=a.title[0].toUpperCase()+a.title.slice(1);
      a.title=mytitle
      dispatch(addingCard(a))
      setTitle('')
      setBucket('');
      setDescription('');
      setLink('');
      let data = {
        link: link,
        description: description,
        title: title,
        bucket: bucket,
      }
      

      setLink(myArray)
      setValue((value)=>{
        return([...value,data])
      })
      console.log(value)
      navigate("/")
    }
  }

  return (
    <>
      <div className="main-div">
        <div className="child-div">

          <div className="addItems">
            <input type="text" placeholder="Add Bucket Name"
              value={bucket}
              onChange={(e) => setBucket(e.target.value)}
            />
            {/* {
                            toggleSubmit ? <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i> :
                                 <i className="far fa-edit add-btn" title="Update Item" onClick={addItem}></i>
                        } */}

          </div>
          <div className="addItems">
            <input type="text" placeholder="Paste Video Link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            {/*  {/* {
                            toggleSubmit ? <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i> :
                                 <i className="far fa-edit add-btn" title="Update Item" onClick={addItem}></i>
                        } */} */

          </div>
          <div className="addItems">
            <input type="text" placeholder="Add Card Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {/* {
                            toggleSubmit ? <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i> :
                                 <i className="far fa-edit add-btn" title="Update Item" onClick={addItem}></i>
                        } */}

          </div>
          <div className="addItems">
            <input type="text" placeholder="Add Card Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {/* {
                            toggleSubmit ? <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i> :
                                 <i className="far fa-edit add-btn" title="Update Item" onClick={addItem}></i>
                        } */}

          </div>

          {/* <div className="showItems">
                        
                        {
                            items.map((elem) => {
                                return (
                                    <div className="eachItem" key={elem.id}>
                                        <h3>{elem.name}</h3>
                                        <div className="Form-btn">
                                            <i className="far fa-edit add-btn" title="Edit Item" onClick={() => editItem(elem.id)}></i>
                                            <i className="fa fa-trash-o add-btn" title="Delete Item" onClick={() => deleteItem(elem.id)}></i>
                                        </div>
                                  </div>
                                )
                            })

                        }
                       
                    </div> */}

          {/* clear all button  */}
          <div className="showItems">
            <button type="button" className="btn btn-success" onClick={addItem}>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form
