import React, { Component } from 'react';
import NycMap from "./NycMap"
import waterAPI from '../api/waterAPI';


class SearchBorough extends Component {
    constructor() {
        super()
        this.state = ({
            value: '',
            geoData: []
        })
    }

    // getSvgPathData () {
    //     waterAPI.getGeoData()
    //         .then(res => this.setState({geoData: res.json()}))
    //         .catch(err => console.log(err))
    // }

    handleInputChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    boroughsRender = () => { 
        const { boroughs } = this.props
        console.log(boroughs)
    }

    componentDidMount() {
        // this.getSvgPathData()
        waterAPI.getGeoData
        .then(res =>{
            console.log("res.json()", res)
            this.setState({geoData: res})
        })
        .catch(err => console.log(err))
    }



    render() {
        const { boroughs } = this.props
        console.log("geoData ",this.state.geoData)
        console.log('this.state', this.state.value)
        console.log('props inside of SearchBorough',boroughs)
        // console.log(boroughs)
        return (
            <div>
                SearchBorough page
                <form>
                    <select value={this.state.value} onChange={this.handleInputChange}>
                        {boroughs.map(e => {
                            return <option key={e.length}>{e}</option>
                        })}
                    </select>
                </form>
                <NycMap geoData={this.state.geoData}/>
            </div>
        )
    }
}

export default SearchBorough;