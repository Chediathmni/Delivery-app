import React, { Component } from 'react';
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id, company, img, info, price, title, inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-blue text-slanted my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img className="img-fluid" src={img} alt={title + " model image"} />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model : {title} </h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">made by: <span className="text-uppercase">{company}</span></h4>
                                    <h4 className="text-bleu"><strong>price : {price} <span>DT</span></strong></h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                    some info about the product:
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    <div>
                                        <Link to='/'>
                                            <ButtonContainer>
                                                Back to Products
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart disabled={inCart} onClick={()=>{
                                            value.addToCart(id)
                                            value.openModal(id)
                                        }}>
                                            {inCart?"inCart":"add to Cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;