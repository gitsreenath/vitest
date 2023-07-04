import React from 'react'
import { fetchData } from './utils/Helper'

const App = () => {
  return (
    <div>
      {fetchData()}
    </div>
  )
}

export default App