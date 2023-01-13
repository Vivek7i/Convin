import React, { useState } from 'react'
import Card1 from './Card1'
function Bucket(props) {
  const [k, setK] = useState(props.data)
  let history = []
  return (
    <div>
      {k?.map((d) => {
        let hist = []
        const cardHandler = (h)=>{
          console.log(h);
          hist = h
          props.onBucket(hist)
        }
        return (
          <>
            <div className="container">
              <div  class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      {d.bucket}
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <Card1 onCard={cardHandler} data={d} history={history}></Card1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default Bucket
