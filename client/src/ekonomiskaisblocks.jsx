import React from 'react'
import moment from 'moment'
import { css, StyleSheet } from 'aphrodite'


const Block = () => {
  return (
    <div className={css(style.container)}>
      <header className={css(style.header)}>
        <div className={css(style.headerP)}>
          Sessijas laiks
        </div>
        <div className={css(style.headerP, style.headerBold)}>
          {moment(new Date()).format('LLL')}
        </div>
      </header>
      <div className={css(style.container)}>
      </div>
    </div>
  )
}


const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    width: '100vw',
    marginTop: 63
  },
  header: {
    width: '100%',
    flexShrink: 0,
    display: 'flex',
    padding: '12px 24px',
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
  },
  content: {
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    flexWrap: 'wrap',
    display: 'flex',
    height: '100%',
    width: '100%'
  }
})


export default Block