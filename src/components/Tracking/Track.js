import React, { Component } from 'react';
import { Deliveries } from '../../data'
import { TitleLeft } from '../Title'
import DeliveryProduct from './DeliveryProduct'
import {TrackingMap} from './MyMapComponent'

class Tracking extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: '',
            test: false,
            search: '',
            delivery: {}
        }
        this.items = Deliveries
    }

    switchState = (switcher) => {
        this.setState(() => {
            return { found: switcher }
        })
    }


    getDelivery = (deliveryCode) => {

        let tempDel = {}
        if (this.state.delivery === {} || this.state.delivery.code !== deliveryCode) {
            this.switchState(false)
            Deliveries.forEach((item) => {
                if (item.code === deliveryCode) {
                    tempDel = item
                    this.switchState(true)
                }
            })
            this.setState(() => {
                return {
                    delivery: tempDel
                }
            }, () => { if (this.state.found) console.log(this.state.delivery) })
        }
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        this.setState(() => ({ text: value }))
        const regex = new RegExp(/^[A-Z0-9]*$/, 'g');
        if (value.length === 6 && regex.test(value)) {
            this.setState(() => ({ test: true }))
        }
        else {
            this.setState(() => ({ test: false }))
        }
    }

    renderButton = () => {
        if (this.state.text !== "") {
            const test = this.state.test;
            if (test) return (
                <span className="hastooltip ml-5"><i className="fas fa-check icon"
                    onClick={() => this.getDelivery(this.state.text)} />
                    <span className="tooltiptext">Valid Code</span>
                </span>)
            else return (
                <span className="hastooltip ml-5"><i className="fas fa-times icon"
                    style={{ color: "red" }} />
                    <span className="tooltiptext">Invalid Code</span>
                </span>)
        }
    }

    renderProducts = (products) => {
        return products.map((product) => {
            return <DeliveryProduct key={product.id} product={product} />
        })
    }

    renderPath = (path) => {
        return (
            <ul>
                {path.map((item) => <li className="pl-3">{item.date} -  {item.at}</li>)}
            </ul>
        )
    }
    closeDelivery = () => {
        this.setState(() => {
            return {
                delivery: {},
                found: false,
                text: ''
            }
        })
    }

    renderDelivery = () => {
        const foundDel = this.state.delivery
        if (this.state.found) return (
            <div>
                <div className="row">
                <h3 className="text-title">Command Date : {foundDel.date}</h3>
                <span className="hastooltip ml-5">
                <i className="far fa-times-circle close-icon" 
                style={{color: "red"}}
                    onClick={() => this.closeDelivery()} />
                    <span className="tooltiptext">Close</span>
                </span>
                </div>
                <h3 className="text-title">Status : {foundDel.status}</h3>
                <div className="container mt-5">
                    <h5>Products</h5>
                    <div className="row">
                        {this.renderProducts(foundDel.products)}
                    </div>
                </div>
                <div className="container mt-5">
                    <h5>Path</h5>
                    {this.renderPath(foundDel.path)}
                        <div className="mt-5"><TrackingMap /></div>
                </div>
            </div>
        )
    }


    render() {
        const { text } = this.state
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <TitleLeft name="" title="Track" />
                        <div className="row">
                            <div className="trackInput">
                                <div className="AutoCompleteText">
                                    <input value={text} onChange={this.onTextChanged} type='text' placeholder="Insert Tracking Code" className="pl-3" />
                                </div>
                            </div>
                            {this.renderButton()}
                        </div>
                        <div className="tracking-result mt-5">
                            {this.renderDelivery()}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Tracking;
