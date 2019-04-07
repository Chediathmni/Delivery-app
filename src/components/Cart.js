import React, { Component } from 'react';
import Product from './Product'
import PropTypes from 'prop-types'
import {ButtonContainer} from './Button'
import {ProductConsumer} from '../context'
import Title from './Title'

class Cart extends Component {


    render() {
        return (
            <React.Fragment>
            <ProductConsumer>
                {value => (
                    <div className="container">
                        <Title name="Your" title="Cart" />
                        <ButtonContainer onClick={()=> {
                            value.cart.forEach(() => {console.log(value.cart)})
                        }}>test Button</ButtonContainer>
                    </div>
)}
            </ProductConsumer>
            </React.Fragment>
        );
    }
}

export default Cart;