import { Children, cloneElement, useState } from 'react'

import './tabs.less'

export const TabsNav = ({ activeTab, setActiveTab, children }) =>
  <div className='tab-navigation'>
    {Children.map(children, (child, idx) =>
      cloneElement(child, {
        ...(child.attributes || child.props || {}),
        activeTab,
        setActiveTab,
        idx
      })
    )}
  </div>

export const Tab = ({ idx, activeTab, setActiveTab, children }) =>
  <div
    className={['nav-item', idx === activeTab ? 'active' : ''].join(' ')}
    onClick={() => setActiveTab(idx)}
  >
    {children}
  </div>

export const TabsContent = ({ activeTab, setActiveTab, children }) =>
  <div className='tab-content'>
    {Children.map(children, (child, idx) =>
      cloneElement(child, {
        ...(child.attributes || child.props || {}),
        activeTab,
        setActiveTab,
        idx
      })
    )}
  </div>

export const TabPane = ({ idx, activeTab, setActiveTab, children }) =>
  <div className={['tab-pane', idx === activeTab ? 'active' : ''].join(' ')}>
    {children}
  </div>

export function Tabs ({ children }) {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className='tabs'>
      {Children.map(children, (child) =>
        cloneElement(child, {
          ...(child.attributes || child.props || {}),
          activeTab,
          setActiveTab
        })
      )}
    </div>
  )
}
