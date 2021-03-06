import { useMappedState } from '@app-elements/use-mapped-state'

import { ElementHolder } from '/elements/element-holder'

import { components } from '/components'
import store from '/store'

import './home.less'

const anchors = components.map(c => c.component)

const Anchors = () => {
  const currentHash = useMappedState(store, ({ currentHash }) => currentHash)
  return (
    <ul>
      {anchors.map(anchor =>
        <li>
          <a
            data-external-link
            key={anchor}
            href={`#${anchor}`}
            onClick={(ev) => {
              ev.preventDefault()
              store.setState({ currentHash: anchor })
              window.location.hash = '#' + anchor
            }}
            className={`anchor ${currentHash === anchor ? 'active' : ''}`}
          >
            {anchor}
          </a>
        </li>
      )}
    </ul>
  )
}

export function Home () {
  console.log({ components })
  return (
    <div className='container'>
      <div className='elements-wrapper'>
        <div className='legend'>
          <Anchors />
        </div>

        <div className='elements-content'>
          {components.map(({ name, component, description, version }) =>
            <ElementHolder key={name} heading={component} name={name} version={version}>
              <p>{description}</p>
            </ElementHolder>
          )}
        </div>
      </div>
    </div>
  )
}
