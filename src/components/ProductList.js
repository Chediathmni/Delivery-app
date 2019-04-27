import React, { Component } from 'react';
import Product from './Product';
import Title from './Title'
import {storeProducts} from '../data'
import {ProductConsumer} from '../context'

class ProductList extends Component {
    constructor(props) {
    super(props)
    this.state = {
        text: '',
        suggestions: [],
        found: []
    }
    this.items = storeProducts   
}

    state = {
        products: storeProducts,
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0 ) {
            const regex = new RegExp(`${value}`,'i');
            suggestions = this.items.sort().filter(product => regex.test(product.title))
        }
        this.setState(() => ({ suggestions, text: value }))
    }

    renderSuggestions = () => {
        const { suggestions } = this.state
        if (suggestions.length === 0) {
            return null
        }
        return (
            <ul>
                {suggestions.map((item) => <li className="Suggestions pl-3" onClick={() => this.suggestionSelected(item.title)}>{item.title}</li>)}
            </ul>
        )
    }

    suggestionSelected = (value) => {
        this.setState({
            text: value,
            suggestions: [],
            found: this.state.suggestions.filter((product) => product.title === value)
        })
    }


    render() {
        const { text } = this.state
        const { suggestions, found } = this.state
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        <div className="AutoCompleteText">
                            <input value={text} onChange={this.onTextChanged} type='text' placeholder="Search for Products" className="pl-3"/>
                            {this.renderSuggestions()}
                        </div>
                        <div className="row">
                            <ProductConsumer>
                            {(value)=> {
                                if (text.length > 0) {
                                    if (suggestions.length === 0) {
                                        return found.map((product)=> {
                                            return <Product key={product.id} product={product} />
                                    })
                                    }
                                    return suggestions.map((product)=> {
                                        return <Product key={product.id} product={product} />
                                })}
                                else {
                                    return value.products.map((product)=> {
                                        return <Product key={product.id} product={product} />
                                    })
                                }
                            }}   
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductList;