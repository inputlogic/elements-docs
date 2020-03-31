import { render } from 'react'

import Helmet from '@app-elements/helmet'
import Notification from '@app-elements/notification'
import Router from '@app-elements/router'

import { GlobalHeader } from '/elements/global-header'
import NotFound from '/elements/not-found'

import store, { Provider } from '/store'

import '/util/extend-xhr'

import '/styles/reset.less'
import '/styles/base.less'
import '/styles/variables.less'
import '/styles/typography.less'
import '/styles/button.less'
import '/styles/containers.less'
import '/styles/modals.less'
import '/styles/form.less'

import Main, { routes as mainRoutes } from '/apps/main'

// Define our top-level routes
const routes = {
  main: {
    routes: mainRoutes,
    component: Main
  }
}

function Root () {
  return (
    <Provider store={store} routes={routes}>
      <div className='main-app-container'>
        <Helmet
          title='Documentation'
          titleTemplate='App Elements | %s'
          defaultTitle='Documentation'
        />

        <GlobalHeader />
        <Notification />

        <Router routes={routes} />

        <NotFound />
      </div>
    </Provider>
  )
}

render(<Root />, document.getElementById('root'))
