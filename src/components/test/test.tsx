import React from 'react'
import styles from './test.module.scss'
type TestProps = {

}

const Test: React.FC<TestProps> = () => {
  return (
    <div className={styles.container}>
    <h1>Header</h1>
    <p>My supercool component</p>
    <p>test 2</p>
  </div>
  )
}

export default Test
