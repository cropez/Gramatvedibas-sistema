import React from 'react'
import moment from 'moment'
import { css, StyleSheet } from 'aphrodite'


const Block = () => {
  return (
    <header className={css(style.header)}>
      <div className={css(style.headerP)}>
        Sessijas laiks
      </div>
      <div className={css(style.headerP, style.headerBold)}>
        {moment(new Date()).format('LLL')}
      </div>
    </header>
  )
}


const style = StyleSheet.create({
  header: {
    width: '100%',
    flexShrink: 0,
    display: 'flex',
    padding: '12px 30px',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: 'solid 1px #aaa',
  },
  headerP: {
    fontSize: 14,
    color: '#000'
  },
  headerBold: {
    fontSize: 12,
    color: '#000',
    fontWeight: 700
  }
})


export default Block