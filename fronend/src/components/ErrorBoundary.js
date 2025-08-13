// scripts/ErrorBoundary.js
import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError (error) {
    return { hasError: true }
  }

  componentDidCatch (error, errorInfo) {
    console.error('Error caught:', error, errorInfo)
  }

  render () {
    if (this.state.hasError) {
      return (
        <div className='error-boundary'>
          <h3>Something went wrong</h3>
          <p>Please refresh the page or try again later.</p>
        </div>
      )
    }
    return this.props.children
  }
}
