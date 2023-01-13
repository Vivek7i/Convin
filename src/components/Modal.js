import React,{useState} from 'react'
import "./Modal.css";
function Modal(props) {
const [d, setD] = useState(props.dat)
let c=props.close;
  return (
    <div className="modalBg">
      <div className="modalContain">
        <div className="titleCloseBtn">
        <button  onClick={()=>{
                  c(false);}}>X</button>
                  </div>
        <div className="modalTitle"> <h1>{d.title}</h1></div>
        <div className="modalBody">
        <iframe width="500" height="315" src={d.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="modalFooter">
          <button onClick={()=>{
                  c(false);}}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
{/* <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div> */}
