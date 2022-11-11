import React from 'react'
import { css, StyleSheet } from 'aphrodite'


const Tables = () => {
  return (
    <div className={css(style.container)}>
      <div className={css(style.title)}>
        Nepieciesamu precu saraksts
      </div>
      <div className={css(style.table)}>
        <div className={css(style.row, style.first)}>
          <div className={css(style.item, style.left)}>
            <div className={css(style.tableH1)}>
              Veikals
            </div>
          </div>
          <div className={css(style.item)}>
            <div className={css(style.tableH1)}>
              Noliktava
            </div>
          </div>
        </div>
        {
          (() => {
            const rows = []

            for (let i = 0; i < 7; i++) {
              rows.push(
                <div
                  key={i}
                  className={css(style.row)}
                >
                  <div className={css(style.item, style.left)} />
                  <div className={css(style.item)} />
                </div>
              )
            }

            return rows
          })()
        }
      </div>
    </div>
  )
}


const style = StyleSheet.create({
  container: {
    width: '30%',
    minWidth: 300,
    padding: 10,
    '@media (max-width: 600px)': {
      minWidth: 'unset',
      maxWidth: 'unset',
      marginBottom: 30,
      width: '100%',
      padding: 0
    }
  },
  title: {
    fontSize: 14,
    color: '#000',
    fontWeight: 600,
    marginBottom: 24,
    textAlign: 'center'
  },
  table: {
    width: '100%'
  },
  row: {
    width: '100%',
    display: 'flex',
    flexWrap: 'no-wrap',
    alignItems: 'center',
    borderLeft: 'solid 1px #333',
    borderRight: 'solid 1px #333',
    borderBottom: 'solid 1px #333',
  },
  first: {
    borderTop: 'solid 1px #333',
  },
  left: {
    borderRight: 'solid 1px #333',
  },
  item: {
    width: '50%',
    flexShrink: 0,
    padding: '12px 20px'
  },
  tableH1: {
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 13
  }
})


export default Tables