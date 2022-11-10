import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import SessionTime from '../SessionTime'


const points = [
  'Augli un darzeni',
  'Veganu produkti',
  'Gala un zivis',
  'Piena produkti',
  'Maizes',
  'Dzerieni',
  'Alkohols',
  'Tirisanas lidzekli',
  'Majdzivnieku produkti',
  'Bernu preces'
]


const Categories = () => {
  return (
    <section className={css(style.container)}>
      <h1 className={css(style.title)}>
        Kategorijas
      </h1>
      {
        points.map((p, i) => (
          <div
            key={i}
            className={css(style.point)}
          >
            <div className={css(style.pointHead)} />
            <div className={css(style.pointVal)}>
              {p}
            </div>
          </div>
        ))
      }
    </section>
  )
}


const style = StyleSheet.create({
  container: {
    border: 'solid 1px #aaa',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 8,
    display: 'flex',
    maxWidth: 300,
    width: '20%',
    padding: 10,
  },
  title: {
    fontSize: 13,
    fontWeight: 600,
    color: '#222',
    marginBottom: 12
  },
  point: {
    width: '100%',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'no-wrap',
    cursor: 'pointer',
    marginBottom: 4,
    color: '#555'
  },
  pointHead: {
    width: 4,
    height: 4,
    marginRight: 5,
    borderRadius: 2,
    backgroundColor: '#000'
  },
  pointVal: {
    fontSize: 12,
    fontWeight: 400
  }
})


export default Categories