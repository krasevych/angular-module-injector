# Angular Module Injector


## Installing with NPM

```
npm install --save angular-module-injector
```

## Installing with Bower

```
bower install angular-module-injector
```

## Manual installation
```html
<body>
  <script src="angular-1.x.js"></script>
  <script src="dist/angular-module-injector.ts"></script>
  <script src="app.js"></script>
</body>
```

## Overview
You can change inject modules like into angular 2:

Before:

```
import {Dialog} from './components/dialog';
import {Dashboard} from './components/dashboard';
export class Header {
}
angular.module('header', [
        'myDialog',
        'myDashboard'
    ])
    .component('header', {
        controller: Header
    });
```

After:

```
import {Dialog} from './components/dialog';
import {Dashboard} from './components/dashboard';
export class Header {
}
angular.module(Header, [
        Dialog,
        Dashboard
    ])
    .component('header', {
        controller: Header
    });
```

