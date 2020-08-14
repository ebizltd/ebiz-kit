| Project               | Package                                                                                          | Version                                            | License                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------------- | ---------------------------------------------------------- |
| React Output Target   | [`@stencil/react-output-target`](https://www.npmjs.com/package/@stencil/react-output-target)     | [![npm][npm-badge-react]][npm-badge-react-url]     | [![license][npm-license-react]][npm-license-react-url]     |
| Angular Output Target | [`@stencil/angular-output-target`](https://www.npmjs.com/package/@stencil/angular-output-target) | [![npm][npm-badge-angular]][npm-badge-angular-url] | [![license][npm-license-angular]][npm-license-angular-url] |
| Vue Output Target     | [`@stencil/vue-output-target`](https://www.npmjs.com/package/@stencil/vue-output-target)         | [![npm][npm-badge-vue]][npm-badge-vue-url]         | [![license][npm-license-vue]][npm-license-vue-url]         |

# Introduction

Unfortunately the experience of integrating web components into existing applications can be tricky at times. More about this can be read at https://custom-elements-everywhere.com/. In order to accommodate the various issues the Stencil team has created new output target plugins to make the process simpler.

The plugins add additional output targets for each framework binding that is included.

Here is an example project using the plugins for reference: https://github.com/ionic-team/stencil-ds-output-targets/blob/master/packages/example-project/component-library

## Getting started

To set up this project and prepare the example project to be used in your own projects run the following commands.

```
npm i
npm run bootstrap
npm run build
```

This will generate all necessary builds in the example projects. You can then either publish the packages to npm or a private package manager, or use `npm pack` to start using the builds in a local project for testing purposes where you manually place the package in the project `node_modules` folder.

Say you have an Angular project, simply run `npm pack` in `packages/example-project/component-library` and `packages/example-project/component-library-angular`. Since the framework component libraries depend on the StencilJS project, you will need to provide the `component-library` package in your project `node_modules` folder.

## Angular

Angular has a pretty good story for integration with web components but there are a few issues with the developer experience. If you want to know what the story is without the bindings go here: https://stenciljs.com/docs/angular.

With bindings the web components get wrapped in an Angular component and then immediately become available as Angular Components. Some of the advantages of doing this are that you get types for your components and you also get the ability to use ngmodel on inputs. Your developers then consuming your web components from Angular applications import an actual Angular Library and to them it feels as though they are interacting with Angular components.

### Stencil Config setup

To make use of the AngularOutputPlugin first import it into your stencil.config.ts file. Then add it as an OutputTarget.

```ts
import { Config } from '@stencil/core';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'demo',
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: 'component-library',
      directivesProxyFile: '../component-library-angular/src/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    {
      type: 'dist',
    },
  ],
};
```

#### componentCorePackage

This is the NPM package name of your core stencil package. In the case of Ionic we chose ‘@ionic/core’. This is the package that gets published that contains just your web components. This package is then used by the Angular package as a dependency

#### proxiesFile

This is the output file that gets generated by the outputTarget. This file should be referencing a different package location. In the example case we are choosing a sibling directory’s src directory. We will then create an Angular package that exports all components defined in this file.

#### valueAccessorConfigs

In order for ngmodel to work on input components we need to define certain pieces of information about the input components. Unfortunately the Stencil compiler cannot infer the intent of components because this is a very conceptual idea.

### Setup of Angular Component Library

There is an example component library package available on Github so that you can get started. This repo will likely live as a sibling to your Stencil component library. https://github.com/ionic-team/stencil-ds-angular-template

### Usage

```ts
import { ComponentLibraryModule } from 'component-library-angular';

@NgModule({
  ...
  imports: [
    ComponentLibraryModule
  ],
  ...
})
export class AppModule { }
```

### Example: my-component

Now we can add a web component to one of our Angular components. Take for example our `app.component`.

In our template we add:

```
<my-component [first]=firstProperty middle="Middle Name" last="Doe"></my-component>
```

As you can see, the `first`  property acts as an Angular input, that gets passed in a variable named `firstProperty`, which will need to be defined in our component. `middle` and `last` are just `strings`.

```
export class AppComponent {
  firstProperty = 'John';
}
```

#### Working with events

StencilJS provides a way to work with events. This is based on the [DOM events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events) specification which is a web standard.

`my-component` has an event defined that can be triggered when clicking the component. The event is called `myCustomEvent`.

To catch an event in Angular that is emitted from a web component, you have 2 options. Using `@HostListener`:

```
@HostListener('myCustomEvent', ['$event'])
onMyCustomEvent($event) {
    console.log('Event using @HostListener', $event);
}
```

Or adding a callback function to the web component:

```
<my-component [first]=selectedFirst middle="middle" last="'Don't call me a framework' JS" (myCustomEvent)="catchEvent($event)"></my-component>

catchEvent($event) {
    console.log('Event using callback on component', $event);
}
```

## React

React has a difficult story with web components. Their documentation shows the simplest possible example but more than likely you will want to pass more than strings to your component. If you want to know what the story is without the bindings go here: https://stenciljs.com/docs/react.

With bindings the web components get wrapped in a React component and then immediately become available as React Components. Some of the advantages of doing this are that you get types for your components. One of the main issues with React is that react does not propertly pass properties to web components. Out of the box React can only pass strings and numbers to components and it cannot listen to custom events. With the bindings the components appear as though they are React components and all properties get passed correctly including functions, objects, and arrays. The bindings also account for custom events by creating a prop called ‘on<EventName>’. These allow React developers to interact with the web components as though they are React components.

### Stencil Config setup

```ts
import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'demo',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'component-library',
      proxiesFile: '../component-library-react/src/components.ts',
    }),
    {
      type: 'dist',
    },
  ],
};
```

#### componentCorePackage

This is the NPM package name of your core stencil package. In the case of Ionic we chose ‘@ionic/core’. This is the package that gets published that contains just your web components. This package is then used by the React package as a dependency

#### proxiesFile

This is the output file that gets generated by the outputTarget. This file should be referencing a different package location. In the example case we are choosing a sibling directory’s src directory. We will then create a React package that exports all components defined in this file.

### Setup of React Component Library

There is an example component library package available on Github so that you can get started. This repo will likely live as a sibling to your Stencil component library. https://github.com/ionic-team/stencil-ds-react-template

### Usage

```ts
import { DemoComponent } from 'component-library-react';
```

## Vue

### Stencil Config setup

```ts
import { Config } from '@stencil/core';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'demo',
  outputTargets: [
    vueOutputTarget({
      componentCorePackage: 'component-library',
      proxiesFile: '../component-library-vue/src/components.ts',
      componentModels: vueComponentModels,
    }),
    {
      type: 'dist',
    },
  ],
};
```

#### componentCorePackage

This is the NPM package name of your core stencil package. In the case of Ionic we chose ‘@ionic/core’. This is the package that gets published that contains just your web components. This package is then used by the Vue package as a dependency

#### proxiesFile

This is the output file that gets generated by the outputTarget. This file should be referencing a different package location. In the example case we are choosing a sibling directory’s src directory. We will then create a Vue package that exports all components defined in this file.

### Setup of Vue Component Library

There is an example component library package available on Github so that you can get started. This repo will likely live as a sibling to your Stencil component library.

### Usage

```ts
import { DemoComponent } from 'component-library-vue';
```

[npm-badge-react]: https://img.shields.io/npm/v/@stencil/react-output-target.svg
[npm-badge-react-url]: https://www.npmjs.com/package/@stencil/react-output-target
[npm-badge-angular]: https://img.shields.io/npm/v/@stencil/angular-output-target.svg
[npm-badge-angular-url]: https://www.npmjs.com/package/@stencil/angular-output-target
[npm-badge-vue]: https://img.shields.io/npm/v/@stencil/vue-output-target.svg
[npm-badge-vue-url]: https://www.npmjs.com/package/@stencil/vue-output-target
[npm-license-react ]: https://img.shields.io/npm/l/@stencil/react-output-target.svg
[npm-license-react-url]: https://github.com/ionic-team/stencil-ds-plugins/blob/master/packages/react-output-target/LICENSE.md
[npm-license-angular ]: https://img.shields.io/npm/l/@stencil/angular-output-target.svg
[npm-license-angular-url]: https://github.com/ionic-team/stencil-ds-plugins/blob/master/packages/angular-output-target/LICENSE.md
[npm-license-vue ]: https://img.shields.io/npm/l/@stencil/vue-output-target.svg
[npm-license-vue-url]: https://github.com/ionic-team/stencil-ds-plugins/blob/master/packages/vue-output-target/LICENSE.md