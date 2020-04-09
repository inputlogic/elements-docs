import { Legend } from '/elements/legend'

import './home.less'

export function Home () {
  return (
    <div className='container'>
      <div className='elements-wrapper'>
        <Legend />

        <div className='elements-content'>
          <h1>Welcome!</h1>
        </div>
      </div>
    </div>
  )
}
