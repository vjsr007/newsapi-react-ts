import React from 'react'
import ReactDOM from 'react-dom'

//pollyfills
import 'core-js/features/array/flat-map'
import 'core-js/features/map'
import 'core-js/features/promise'
import 'core-js/features/set'
import 'raf/polyfill'
import 'whatwg-fetch'

import './index.css'

ReactDOM.render(
    <h1>Hello React/Typescript!</h1>,
    document.getElementById('app-root'),
)
