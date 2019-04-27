import React, { Component } from 'react';
import { Deliveries } from '../../data'
import Title from '../Title'


class Tracking extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: '',
            test: false,
            result: {}
        }
        this.items = Deliveries
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        this.setState(() => ({text: value }))
        console.log(this.state.test)
        console.log(this.state.text)
        if (value.length === 6 ) {
            this.setState(() => ({ test: true }))
        }
            else this.setState(() => ({ test: false }))
    }


    render() {
        const { text } = this.state
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="" title="Track" />
                        <div className="AutoCompleteText">
                            <input value={text} onChange={this.onTextChanged}  type='text' placeholder="Insert Tracking Code" className="pl-3" />
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </React.Fragment>
        )
    }
}

export default Tracking;