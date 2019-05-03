import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {ProductConsumer} from '../../context'

class DeliveryProduct extends Component {
    render() {
        const {id, title, img, price} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                <ProductConsumer>
                    {value => (<div className="img-container p-5" onClick={()=> value.handleDetail(id)}>
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top"/>
                        </Link>
                    </div>)}
                    </ProductConsumer>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className="text-blue font-italic mb-0">
                            {price}
                            <span className="mr-1"> DT</span>
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

export default DeliveryProduct;

DeliveryProduct.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}

const ProductWrapper = styled.div`
    .card{
        border-color: transparent;
        transition:all 1s linear;
        background-color: var(--mainWhite)
    }
    .card-footer{
        background: transparent;
        border-top: transparent;
    }
    &:hover{
        .card{
            border: 0.04rem solid rgba(0,0,0,0.2);
            box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
        }
        .card-footer{
            background: rgba(247,247,247);
        }
    }
    .card-img-top {
        transition: all 0.5s linear;
    }
    .img-container{
        position:relative;
        overflow: hidden;
        &:hover .cart-btn {
            transform: translate(0,0)
        }
        &:hover .card-img-top{
            transform: scale(1.2);
        }
    }
    }
`