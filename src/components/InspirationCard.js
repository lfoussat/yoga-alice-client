import React from 'react'
import { Link } from '@reach/router'
import { Grid } from 'semantic-ui-react'

const InspirationCard = ({ inspiration }) =>
  <Grid.Column
    mobile={16}
    tablet={8}
    computer={4}
    className="inspiration"
    style={{ backgroundColor: `${inspiration.color}` }}>
    <Link to={`/inspirations/${inspiration.id}`}>
      <h2>{inspiration.title}</h2>
      <p>{inspiration.smallDescription}</p>
      <i className="fas fa-arrow-right"></i>
    </Link>
  </Grid.Column>

export default InspirationCard
