import Avatar from '@app-elements/avatar'
import { Link } from '@app-elements/router'

import './global-header.less'

export function GlobalHeader () {
  return (
    <header class='global-header'>
      <div className='container'>
        <div className='logo'>
          <h1>App Elements</h1>
          <ul className='nav'>
            <li><Link name='home' activeClass='active-link'>Documentation</Link></li>
          </ul>
        </div>

        <div className='user-actions'>
          <Avatar
            src='/images/_temp/avatar.png'
            fullName='John Smith'
          />
        </div>
      </div>
    </header>
  )
}
