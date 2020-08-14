| Project               | Package                                                                                          | Version                                            | License                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------------- | ---------------------------------------------------------- |
| Components   | [`@ebiz-kit/components`](https://www.npmjs.com/package/@ebiz-kit/components)   | [![npm][npm-badge-react]][npm-badge-components-url]     | [![license][npm-license-components]][npm-license-components-url]    |
| React        | [`@ebiz-kit/react`](https://www.npmjs.com/package/@ebiz-kit/react)             | [![npm][npm-badge-react]][npm-badge-react-url]          | [![license][npm-license-react]][npm-license-react-url]              |
| Angular      | [`@ebiz-kit/angular`](https://www.npmjs.com/package/@ebiz-kit/angular)         | [![npm][npm-badge-angular]][npm-badge-angular-url]      | [![license][npm-license-angular]][npm-license-angular-url]          |
| Vue          | [`@ebiz-kit/vue`](https://www.npmjs.com/package/@ebiz-kit/vue)                 | [![npm][npm-badge-vue]][npm-badge-vue-url]              | [![license][npm-license-vue]][npm-license-vue-url]                  |

# Introduction

Ebiz Kit is a UI Component Library based on Web Components and StencilJS. This library overcome the bad experience of integrating web components into existing applications which can be tricky at times. More about this can be read at https://custom-elements-everywhere.com/. In order to accommodate the various issues and API compatibility with other javascript frameworks, Ebiz has made some wrapper/output plugins to make the process simpler.

The plugins add additional output targets for each framework binding that is included.

You can learn more about using the plugins in your project below.



**PLEASE NOT THAT THIS LIBRARY IS UNDER FULL DEVELOPMENT AND WILL HAVE MANY BREAKING CHANGES.  DO NOT USE IT IN YOUR PROJECTS YET.**

*Your ideas for improvements and features are very much appreciated!*



## Vue

```ts
import { DemoComponent } from '@ebiz-kit/vue';
```



## React

```ts
import { DemoComponent } from '@ebiz-kit/react';
```



## Angular

```ts
import { ComponentsModule } from '@ebiz-kit/angular';

@NgModule({
  ...
  imports: [
    ComponentsModule
  ],
  ...
})
export class AppModule { }
```

### Example: demo-component

Now we can add a web component to one of our Angular components. Take for example our `app.component`.

In our template we add:

```
<demo-component [first]=firstProperty last="Doe"></demo-component>
```

As you can see, the `first`  property acts as an Angular input, that gets passed in a variable named `firstProperty`, which will need to be defined in our component. `last` is just a `string`.

```
export class AppComponent {
  firstProperty = 'John';
}
```

#### Working with events

StencilJS provides a way to work with events. This is based on the [DOM events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events) specification which is a web standard.

`demo-component` has an event defined that can be triggered when clicking the component. Let's say the event is called `myCustomEvent`.

To catch an event in Angular that is emitted from a web component, you have 2 options. Using `@HostListener`:

```
@HostListener('myCustomEvent', ['$event'])
onMyCustomEvent($event) {
    console.log('Event using @HostListener', $event);
}
```

Or adding a callback function to the component:

```
<demo-component [first]=firstProperty last="Doe" (myCustomEvent)="catchEvent($event)"></demo-component>

catchEvent($event) {
    console.log('Event using callback on demo-component', $event);
}
```



[npm-badge-components]: https://img.shields.io/npm/v/@ebiz-kit/components.svg
[npm-badge-components-url]: https://www.npmjs.com/package/@ebiz-kit/components
[npm-badge-react]: https://img.shields.io/npm/v/@ebiz-kit/react.svg
[npm-badge-react-url]: https://www.npmjs.com/package/@ebiz-kit/react
[npm-badge-angular]: https://img.shields.io/npm/v/@ebiz-kit/angular.svg
[npm-badge-angular-url]: https://www.npmjs.com/package/@ebiz-kit/angular
[npm-badge-vue]: https://img.shields.io/npm/v/@ebiz-kit/vue.svg
[npm-badge-vue-url]: https://www.npmjs.com/package/@ebiz-kit/vue

[npm-license-components ]: https://img.shields.io/npm/l/@ebiz-kit/components.svg
[npm-license-components-url]: https://github.com/ebizltd/ebiz-kit/tree/master/packages/components/LICENSE.md
[npm-license-react ]: https://img.shields.io/npm/l/@ebiz-kit/react.svg
[npm-license-react-url]: https://github.com/ebizltd/ebiz-kit/tree/master/packages/react/LICENSE.md
[npm-license-angular ]: https://img.shields.io/npm/l/@ebiz-kit/angular.svg
[npm-license-angular-url]: https://github.com/ebizltd/ebiz-kit/tree/master/packages/angular/LICENSE.md
[npm-license-vue ]: https://img.shields.io/npm/l/@ebiz-kit/vue.svg
[npm-license-vue-url]: https://github.com/ebizltd/ebiz-kit/tree/master/packages/vue/LICENSE.md
