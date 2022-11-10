import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import SessionTime from '../SessionTime'
import Categories from './Categories'
import Tables from './Tables'
import Stats from './Stats'


const Block = () => {
  return (
    <div className={css(style.container)}>
      <SessionTime />
      <div className={css(style.content)}>
        <Categories />
        <Stats />
        <Tables />
      </div>
    </div>
  )
}


const style = StyleSheet.create({
  container: {
    minHeight: 'calc(100vh - 100px)',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    display: 'flex',
    width: '100vw'
  },
  content: {
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    padding: '40px 30px',
    flexWrap: 'wrap',
    display: 'flex',
    height: '100%',
    width: '100vw',
    '@media (max-width: 900px)': {
      flexWrap: 'wrap'
    },
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      alignItems: 'unset',
      flexWrap: 'unset'
    }
  }
})


export default Block