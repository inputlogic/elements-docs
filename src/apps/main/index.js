import Router from '@app-elements/router'
import url from '/util/url'
import { Home } from './home'
import { Documentation } from './documentation'

export const routes = {
  home: {
    path: url('home'),
    component: Home
  },
  documentation: {
    path: url('documentation'),
    component: Documentation
  }
}

export default (
  <div>
    <Router routes={routes} />
  </div>
)
