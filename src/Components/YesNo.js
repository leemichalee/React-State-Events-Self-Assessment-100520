import React from 'react'
import { yes, no } from '../objects'

class YesNo extends React.Component {
    constructor() {
        super()
        this.state = {
            img: no['no-image'],
            h1: no['no-statement']
        }
    }

    change = () => {
        if(this.state.img === no['no-image']) {
            this.setState({
                img: yes['yes-image'],
                h1: yes['yes-statement']
            })
        } else {
            this.setState({
                img: no['no-image'],
                h1: no['no-statement']
            })
        }
    }

    render() {
        return(
            <div className='app'>
            <div className='display' >
            <h1>{this.state.h1}</h1>
            <img onClick={this.change} src={this.state.img} />
            </div>
            </div>
        )
    }
}

export default YesNo