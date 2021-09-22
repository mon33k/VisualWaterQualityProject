import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';

import Bookmark from './Bookmark';
import HistoryTimeline from './HistoryTimeline';
import SearchBorough from './SearchBorough';
import Resources from './Resources';
import waterAPI from '../api/waterAPI';

class Main extends Component {
    constructor () {
        super()
        this.state = {
            savedInfo: [],
            // boroughs: ['']
        }
    }

    /*
    synchronous execution happens first and then the axios asynchronous request as the value happens in the background at a later time than if you had the promise resolved inside of the function for ex:

    inside of componentDidMount you have this:
        let api = waterAPI.grabAllData()

    but should do this instead: 
        waterAPI.grabAllData()
        .then(res => {
            this.setState({
                savedInfo: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })

    But! you can also do it this way, with Promise.resolve:
    */

    componentDidMount() {
        Promise.resolve(waterAPI.grabAllData)
        .then((data) => {
            this.setState({
                savedInfo: data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    renderBookmarkInfo = () => {
        return (
            <Bookmark render={this.addSavedInfo}/>
        )
    }

    renderHistoryTimeline = () => {
        return (
            <HistoryTimeline />
        )
    }

    renderSearchBorough = () => {
        const {savedInfo} = this.state
        // grab only the borough for each key 
        let onlyBoroughs = savedInfo.map(e => {
            return e.borough
        })
        // create an array for the borough names
        let onlyUniqueBoroughs = new Set(onlyBoroughs)
        // create a set for this array that will filter only unique values 
        // console.log('okkkk',onlyUniqueBoroughs)
        // create another variable to turn the set into an array and pass that into the SearchBorough component
        const arr = Array.from(onlyUniqueBoroughs)
        return (
            <SearchBorough boroughs={arr}/>
        )
    }


    renderResources = () => {
        return (
            <Resources />
        )
    }

    addSavedInfo = (info) => {
        const {savedInfo} = this.state
        this.setState({
            savedInfo: [...savedInfo, info]
        })
    }

    render () {
        // console.log("this.state water", this.state.savedInfo)
        console.log("in water component ", )
        return (
            <div>
                <Switch>
                    <Route path="/water/searchBorough" render={this.renderSearchBorough}/>
                    <Route path="/water/timeLine" render={this.renderHistoryTimeline}/>
                    <Route path="/water/bookmark" render={this.renderBookmarkInfo}/>
                    <Route path="/water/resources" render={this.renderResources}/>
                </Switch>
            </div>
        )
    }
}

export default Main;