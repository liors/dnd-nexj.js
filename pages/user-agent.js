import React from 'react'
import Header from '../components/Header'
import Section from '../components/Section'

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent }
  }
  onClick () {
      console.log('i was clicked')
  }
  render () {
    return (
        <div>
            <Header />
            <Section><p onClick={() => this.onClick() }>Hello World {this.props.userAgent}</p></Section>
        </div>
    )
  }
}