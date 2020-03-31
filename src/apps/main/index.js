import Router from '@app-elements/router'
import url from '/util/url'
import { Home } from './home'

export const routes = {
  home: {
    path: url('home'),
    component: Home
  }
}

export default function MainApp () {
  return (
    <div>
      <Router routes={routes} />
    </div>
  )
}
