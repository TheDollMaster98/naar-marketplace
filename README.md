# NaarMarketplace

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.9.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

---

# Angular:

```
signals:
https://angular.dev/guide/components/inputs
```

```
Inject vs constructor per i service ed altro:
In

https://angular.dev/api/core/inject

https://alyshovtapdig.medium.com/inject-vs-constructor-in-angular-which-one-should-you-use-en-dbdf1070739c#:~:text=Advantages%20and%20Disadvantages%20of%20Both,()%20is%20a%20better%20choice.

https://www.youtube.com/watch?v=SMFhsSQvsEc
```

```
Angular form:
https://angular.dev/guide/forms
https://angular.dev/guide/forms/reactive-forms
https://angular.dev/api/forms/FormGroup

https://angular.dev/guide/forms/form-validation

Angular FORM: https://www.youtube.com/watch?v=COgVXd4rd_8

fake chiamata MOCK API: https://www.youtube.com/watch?v=9gK9H9-PQB8
```

# Librerie:

## Kendo:

```
https://www.telerik.com/kendo-angular-ui/components/getting-started

https://www.telerik.com/kendo-angular-ui/components/notification
  ng add @progress/kendo-angular-grid
```

```
Style:
https://www.telerik.com/kendo-angular-ui/components/styling

https://www.telerik.com/design-system/docs/themes/kendo-themes/default/theme-variables/
```

```
  ho messo loro per ora:
  ng add @progress/kendo-angular-inputs
  ng add @progress/kendo-angular-label
  ng add @progress/kendo-angular-dateinputs
  ng add @progress/kendo-angular-tooltip
  ng add @progress/kendo-angular-layout
  ng add @progress/kendo-angular-notification
```

# Assets:

```
https://icons.getbootstrap.com
```

```
https://www.figma.com/community/file/1108082731170738492
```

# Esempi:

```
side bard bootstrap 5:
https://getbootstrap.com/docs/5.3/examples/sidebars/#
```

# CSS:

```
Come fixare sidebar, navbar, main per dargli spazio:
https://css-tricks.com/almanac/properties/p/position/

come usare calc:
https://css-tricks.com/a-complete-guide-to-calc-in-css/

Animazioni:
https://developer.mozilla.org/en-US/docs/Web/CSS/animation

bottoni custom:
https://www.w3schools.com/howto/howto_css_icon_buttons.asp

Carosello cards:
https://css-tricks.com/pure-css-horizontal-scrolling/

Infinite horizontal scroll:
https://www.youtube.com/watch?v=0QI4ymWwpG0

DA VEDERE LUI DOMANI:
https://www.youtube.com/watch?v=rdqjMN7Q-bk

Questo forse è giusto per lo scroll a mano:
https://web.dev/articles/css-scroll-snap?hl=it
https://www.reddit.com/r/angular/comments/1cobwnw/filtering_on_for_in_angular_17/
https://www.youtube.com/watch?app=desktop&v=kHPm_AlxP7U

```

# Palette:

```
https://coolors.co/palette/fbfbfb-2b0a3d-8d00f9-be9fd6
```

# MOCK JSON & Fake Chiamata API

```
ci ho messo ore per capirlo, ma credo di aver capito come crearlo
[
  '{{repeat(100)}}',
  {
    title: '{{company()}}',
    description: '{{lorem(1, "sentences")}}',
    price: '{{floating(10, 1000, 2)}}',
    imageUrl: 'assets/placeholder-image.webp',
    category: '{{random("Elettronica", "Abbigliamento", "Giocattoli", "Sport", "3D", "UI", "Design", "Graphics", "Template")}}'
  }
]

https://json-generator.com

fake chiamata MOCK API: https://www.youtube.com/watch?v=9gK9H9-PQB8

RxJS: https://rxjs.dev/guide/observer
https://rxjs.dev/api
```
