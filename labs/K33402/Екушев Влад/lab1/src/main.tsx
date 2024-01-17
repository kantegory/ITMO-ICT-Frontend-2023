import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import Router from 'src/components/Router'
import store from 'src/store'

import 'src/styles/fonts.css'
import 'simplebar-react/dist/simplebar.min.css'
import { Provider } from 'react-redux'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
)
