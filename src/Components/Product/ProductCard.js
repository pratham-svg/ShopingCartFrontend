import React from 'react'

const ProductCard = (props) => {
    let checkPops = ()=>{
    console.log(props.product._id)
    }
  return (
    <div>
       {props.product && <div className="col mb-5">
              <div className="card h-100">

                <img className="card-img-top" src={props.product.productImage} style={{height : "300px"}} alt="..." />

                <div className="card-body p-4">
                  <div className="text-center">

                    <h5 className="fw-bolder">{props.product.title} </h5>

                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                   Rs.{props.product.price }
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="/">Add to cart</a>
                            </div>
                </div>
              </div>
            </div>}
    </div>
  )
}

export default ProductCard
