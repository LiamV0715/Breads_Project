const React = require('react')
const Default = require('./layouts/default')

function NotFound() {
      return (
        <Default>
            <h3>404 Not Found</h3>
        </Default>
      )
  }

module.exports = NotFound