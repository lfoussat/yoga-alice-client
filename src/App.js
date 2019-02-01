import React, { Component } from 'react'
import { Router } from '@reach/router'
import { store } from './store.js'
import Home from './containers/Home.js'
import InspirationsDisplay from './containers/InspirationsDisplay.js'
import InspirationDetail from './containers/InspirationDetail.js'
import Alice from './containers/Alice.js'
import Yoga from './containers/Yoga.js'
import Shiatsu from './containers/Shiatsu.js'
import Stages from './containers/Stages.js'
import Contact from './containers/Contact.js'
import MyInspirations from './containers/MyInspirations.js'
import InspirationEditor from './containers/InspirationEditor.js'
import Authentication from './containers/Authentication.js'
import MyProfile from './containers/MyProfile.js'
import SiteMap from './components/SiteMap.js'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  render() {
    return (
      <Router>
        <Home {...this.state} path="/" />
        <Alice {...this.state} path="/about-me" />
        <Yoga {...this.state} path="/yoga" />
        <Shiatsu {...this.state} path="/shiatsu" />
        <Stages {...this.state} path="/stages" />
        <InspirationsDisplay {...this.state} path="/inspirations" />
        <InspirationDetail {...this.state} path="/inspirations/:id" />
        <Contact {...this.state} path="/contact" />
        <MyInspirations {...this.state} path="/my-inspirations" />
        <MyInspirations
          {...this.state}
          remove
          path="/my-inspirations/:id/remove"
        />
        <MyInspirations {...this.state} new path="/my-inspirations/new" />
        <InspirationEditor {...this.state} path="/inspirations/form/:id" />
        <Authentication {...this.state} path="/sign-in" />
        <Authentication {...this.state} signUp path="/sign-up" />
        <MyProfile {...this.state} path="/profile" />
        <SiteMap {...this.state} path="/site-map" />
      </Router>
    )
  }
}

export default App
