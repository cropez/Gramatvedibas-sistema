import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import Entry from './Entry'


const commonstats = [
  'Kopeja pelna',
  'Videja pelna',
  'Pardotais precu daudzums',
  'Popularaka prece',
]


const productstats = [
  'Kopeja pelna',
  'Videja pelna',
  'Pardotais precu daudzums',
]


const Stats = () => {
  return (
    <div className={css(style.container)}>
    </div>
  )
}


const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    display: 'flex',
    maxWidth: 550,
    width: '40%',
    padding: 10
  }
})


export default Stats