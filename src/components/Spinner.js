import React from 'react'
import { createUseStyles } from 'react-jss'
import spinner from '../assets/images/loading.gif'

const Events = () => {
  const classes = useStyles()
  return (
    <div className={classes.ldsroller}>
      <img src={spinner} alt='spinner' />
    </div>
  )
}

const useStyles = createUseStyles(
  {
    ldsroller: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  },
  { name: 'Events' }
)

export default Events
