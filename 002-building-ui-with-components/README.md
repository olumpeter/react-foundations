# Building UI with Components

There are three core concepts of React that you'll need to be familiar with to start building React applications. These are:

- Components
- Props
- State

In the next chapters, we will go through these concepts and provide resources where you can continue learning them. After you're familiar with these concepts, we'll then show you how to install Next.js and use newer React features such as Server and Client Components.

## Components

User interfaces can be broken down into smaller building blocks called **components**.

Components allow you to build self-contained, reusable snippets of code. If you think of components as **LEGO bricks**, you can take these individual bricks and combine them together to form larger structures. If you need to update a piece of the UI, you can update the specific component or brick.

This modularity allows your code to be more maintainable as it grows because you can add, update, and delete components without touching the rest of our application.

The nice thing about React components is that they are just JavaScript. Let's see how you can write a React component, from a JavaScript perspective:

### Creating components

- In React, components are **functions** that **returns UI elements**. 
- React components should be capitalized to distinguish them from plain HTML and JavaScript.
- You use React components the same way you'd use regular HTML tags, with angle brackets `<>`:


```html
<!-- index.html -->

<html lang="en">
    <head>
        <title>Building UI with components</title>

        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Building UI with Components"/>
        <meta name="author" content="Peter Olum"/>

        <script src="https://unpkg.com/react@18/umd/react.development.js" type="text/javascript" defer></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" type="text/javascript" defer></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js" type="text/javascript" defer></script>
        <script src="scripts/script.jsx" type="text/jsx" defer></script>
    </head>
    <body>
        <div id="app">

        </div>
    </body>
</html>
```

```jsx

// scripts/script.jsx

const app = document.getElementById('app');

function Header() {
    return (
        <>
            <h1>Develop. Preview. Ship.</h1>
        </>
    );
}

const root = ReactDOM.createRoot(app);

root.render(
    <Header />
);
```

If you try to run the code in your browser again, you'll see your changes.

### Nesting components

Applications usually include more content than a single component. You can nest React components inside each other like you would regular HTML elements.

In your example, create a new component called `HomePage`:

```jsx
const app = document.getElementById('app');

function Header() {
    return (
        <>
            <h1>Develop. Preview. Ship.</h1>
        </>
    );
}

function HomePage() {
    return (
        <>
            {/* Nesting the Header component */}
            <Header />
        </>
    )
}

const root = ReactDOM.createRoot(app);

root.render(
    <HomePage />
);
```

### Component trees

You can keep nesting React components this way to form component trees.

![An example of a component tree](/images/learn-component-tree.avif)

For example, your top-level HomePage component could hold a Header, an Article, and a Footer Component. And each of those components could in turn have their own child components and so on. For example, the Header component could contain a Logo, Title and Navigation component.

This modular format allows you to reuse components in different places inside your app.

In your project, since `<HomePage>` is now your top-level component, you can pass it to the `root.render()` method:

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/react-foundations/002-building-ui-with-components/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/react-foundations/002-building-ui-with-components/">Visit website</a>
  </dd>
</dl>