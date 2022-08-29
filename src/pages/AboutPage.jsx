import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <h1> About this Project</h1>
      <p>This is a Ract app to lee</p>
      <p>ver 1</p>
      <p>
        <Link to='/'>Back to home</Link>
      </p>
    </Card>
  )
}

export default AboutPage
