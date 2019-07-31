# Cool Chat

## Opensanca talk 31/07/2019:

### Principles

1. Components should be composable
2. Single Responsibility Principle (SRP)
3. Separation of Concerns (SoC)

References:

- https://medium.com/trabe/using-renderless-components-in-react-to-handle-data-4c55f1e94dd4

### Structuring Folders

```
src/
|– assets/
|– components/
|– functionalities/
|– layouts/
|– pages/
|– App.tsx
|– index.tsx
...
```

#### `assets/`

Save static files (images, styles, scripts, fonts...).

#### `components/` or `ui/`

For smaller components like buttons, input, card.

#### `functionalities/`

Functionalities are implementations independent of views, like handling data, fetching API, manipulating arrays... Also, `functionalities` handles state management. As said by Brad Lemley:

> "functionality produces state — not the other way around"

in his Medium article [Why State Management is All Wrong
](https://medium.com/@bradfordlemley/why-state-management-is-all-wrong-ca9f3bbde869)

#### `layouts/` or `partials/`

The `layouts/` folder contains everything that takes part in laying out the application. It's called by `pages/`

####`pages/`

The application pages.

### Structuring Components

We use the concept of container and view component here (https://reactpatterns.com/#container-component). `index.tsx` is the container and import specific functionalities from `functionalities/`. `View.tsx` is the view component which receive props from its container component.

```
Component/
|– index.spec.tsx
|– index.tsx
|– View.spec.tsx
|– View.story.tsx
|– View.tsx
```
