import React, { Component } from 'react'

class Subscribe extends Component {
  componentDidMount() {
    this.initMailerLite()
  }

  initMailerLite = () => {
    const scriptTag = document.querySelector(
      'script[src="https://assets.mailerlite.com/js/universal.js"]'
    )
    if (!scriptTag) {
      // Load the MailerLite script if it's not already in the document
      const script = document.createElement('script')
      script.src = 'https://assets.mailerlite.com/js/universal.js'
      script.async = true
      script.onload = () => {
        this.initializeForm()
      }
      document.body.appendChild(script)
    } else {
      // Wait a bit and then initialize the form if the script is already loaded
      this.initializeForm()
    }
  }

  initializeForm = () => {
    if (window.ml) {
      window.ml('account', '452769')
      // Check if initialization needs to be delayed
      setTimeout(() => {
        if (this.divRef && window.ml) {
          window.ml('webforms', 'jCtfk4', this.divRef.current)
        }
      }, 500) // Adjust delay as necessary
    }
  }

  render() {
    return (
      <>
        <div ref={this.divRef} className="ml-embedded" data-form="jCtfk4"></div>
      </>
    )
  }
}

export default Subscribe
