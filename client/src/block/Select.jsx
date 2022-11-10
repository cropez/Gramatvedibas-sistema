import React from 'react'
import { css, StyleSheet } from 'aphrodite'


const Select = () => {
  return (
    <div className={css(style.container)}>
      <div className={css(style.icon)}>
        <svg
          className={css(style.svg)}
          viewBox="0 0 18 18"
          role="presentation"
          aria-hidden="true"
          focusable="false"
        >
          <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  )
}


const style = StyleSheet.create({
  container: {
    width: 75,
    height: 24,
    margin: '0 8px',
    borderRadius: 4,
    position: 'relative',
    border: 'solid 1px #000'
  },
  icon: {
    position: 'absolute',
    top: 'calc(50% - 10px)',
    right: 5
  },
  svg: {
    height: 10,
    width: 10
  }
})


export default Select