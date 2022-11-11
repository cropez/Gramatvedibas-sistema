import React from 'react'
import { css, StyleSheet } from 'aphrodite'


const Entry = ({ label, value }) => {
  return (
    <div className={css(style.container)}>
      <div className={css(style.label)}>
        {label}
      </div>
      <div className={css(style.window)}>
        {value && `${value}`}
      </div>
    </div>
  )
}


const style = StyleSheet.create({
  container: {
    width: '100%',
    flexShrink: 0,
    display: 'flex',
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  label: {
    fontSize: 14,
    maxWidth: 250,
    marginLeft: 10,
    color: '#222',
    '@media (max-width: 600px)': {
      marginLeft: 0
    }
  },
  window: {
    border: 'solid 1px #aaa',
    padding: '3px 24px',
    textAlign: 'center',
    borderRadius: 4,
    fontWeight: 600,
    color: '#000',
    fontSize: 12,
    height: 24,
    width: 150
  }
})


export default Entry