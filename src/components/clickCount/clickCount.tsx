import React, { useEffect, useState } from 'react';
import styles from './clickCount.module.scss'

type ClickCountProps = {

}

const ClickCount: React.FC<ClickCountProps> = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('cout is changed', count)

    const id = setInterval(() => console.log(count), 1000)
    return () => clearInterval(id)
  }, [count])

  return (
    <div className={styles.container}>
      <p>you click the button {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default ClickCount
  