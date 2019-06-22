import React, { Component } from 'react';

class SearchBorough extends Component {
    constructor() {
        super()
        this.state = ({
            value: '',
        })
    }

    handleChange = (e) => {
        // console.log('HandleChange',e.target.value)
        this.setState({
            value: e.target.value
        })
    }

    boroughsRender = () => {
        const { boroughs } = this.props
        console.log(boroughs)
    }


    render() {
        const { boroughs } = this.props
        console.log('this.state', this.state.value)
        // console.log('props inside of SearchBorough',boroughs)
        // console.log(boroughs)
        return (
            <div>
                SearchBorough page
                <form>
                    <select value={this.state.value} onChange={this.handleChange}>
                        {boroughs.map(e => {
                            return <option>{e}</option>
                        })}
                    </select>
                </form>
            </div>
        )
    }
}

export default SearchBorough;