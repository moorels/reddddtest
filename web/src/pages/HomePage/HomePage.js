import { Link, routes } from '@redwoodjs/router'
import { useState, useEffect } from 'react'

const HomePage = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1)
    }, 1000)
  }, [count])

  return (
    <>
      <h1>HomePage</h1>
      <p>{count}</p>
      <p>
        Tester .<Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
