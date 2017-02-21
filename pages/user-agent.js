import React from 'react'
import Header from '../components/Header'

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent }
  }
  render () {
    return (
        <div>
            <Header />
            <p>Hello World {this.props.userAgent}></p>
        </div>
    )
  }
}