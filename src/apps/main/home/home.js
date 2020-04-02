import { parse } from 'mark-gor'
import { useMappedState } from '@app-elements/use-mapped-state'

import { ElementHolder } from '/elements/element-holder'
import { Tabs, TabsNav, Tab, TabsContent, TabPane } from '/elements/tabs'

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

const Markdown = ({ markdown }) => {
  const parsed = parse(markdown)
  console.log(parsed)
  return parsed
}

const Docs = ({ docs }) => {
  // {docs.map(([title, content]) =>
  //   <Fragment key={`${name}-${title}`}>
  //     <h3>{title}</h3>
  //     <Markdown markdown={content} />
  //   </Fragment>
  // )}
  return (
    <Tabs>
      <TabsNav>
        {docs.map(([title]) => <Tab>{title}</Tab>)}
      </TabsNav>
      <TabsContent>
        {docs.map(([title, content]) =>
          <TabPane>
            <Markdown markdown={content} />
          </TabPane>
        )}
      </TabsContent>
    </Tabs>
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
          {components.map(({ name, component, description, version, docs }) =>
            <ElementHolder key={name} heading={component} name={name} version={version}>
              <p>{description}</p>
              <Docs docs={docs} />
            </ElementHolder>
          )}
        </div>
      </div>
    </div>
  )
}
