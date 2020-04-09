import W from 'wasmuth'
import { useMappedState } from '@app-elements/use-mapped-state'

import url from '/util/url'
import { components } from '/components'
import store from '/store'

export function Legend () {
  const currentName = useMappedState(store, ({ currentRoute }) => W.path('args.name', currentRoute))
  return (
    <div className='legend'>
      <ul>
        {components.map(({ name, component }) =>
          <li>
            <a
              key={name}
              href={url('documentation', { args: { name: name.replace('@app-elements/', '') } })}
              className={`anchor ${currentName === name.replace('@app-elements/', '') ? 'active' : ''}`}
            >
              {component}
            </a>
          </li>
        )}
      </ul>
    </div>
  )
}
