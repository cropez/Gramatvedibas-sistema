import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import Select from './Select'
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
      <div className={css(style.section)}>
        <div className={css(style.label)}>
          <div>Kopeja statistika:</div>
          <Select />
          <div>Menesu skaits</div>
        </div>
        {
          commonstats.map((s, i) => (
            <Entry
              key={i}
              label={s}
            />
          ))
        }
      </div>
      <div className={css(style.section)}>
        <div className={css(style.label)}>
          <div>Precu:</div>
          <Select />
          <div>statistika:</div>
          <Select />
          <div>Menesu skaits</div>
        </div>
        {
          productstats.map((s, i) => (
            <Entry
              key={i}
              label={s}
            />
          ))
        }
      </div>
    </div>
  )
}


const style = StyleSheet.create({
  container: {
    maxWidth: 550,
    width: '40%',
    padding: 10
  },
  label: {
    fontSize: 14,
    width: '100%',
    marginLeft: 20,
    fontWeight: 600,
    color: '#000',
    display: 'flex',
    marginBottom: 30,
    alignItems: 'center'
  },
  section: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 16,
    display: 'flex',
    width: '100%'
  }
})


export default Stats