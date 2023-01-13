import React,{useState} from 'react'

function Modal1(props) {
// const [d, setD] = useState(props.data)
// console.log(d.link);
console.log("mo22")
  return (
    <div>
        <div class="modal fade" id="Modal2" tabindex="-1" aria-labelledby="Label2" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="Label2">History</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default Modal1
