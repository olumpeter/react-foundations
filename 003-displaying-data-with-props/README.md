# Displaying data with props

What if you want to pass different text or you don't know the information ahead of time because you're fetching data from an external source?

Regular HTML elements have attributes that you can use to pass pieces of information that change the behavior of those elements. For example, changing the `src` attribute of an `<img>` element changes the image that is shown. Changing the `href` attribute of an `<a>` tag changes the destination of the link.

In the same way, you can pass pieces of information as properties to React components. These are called `props`. 

Similar to a JavaScript function, you can design components that accept custom arguments (or props) that change the component's behavior or what is visibly shown when it's rendered to the screen. Then, you can pass down these props from parent components to child components.

>**Note**: In React, data flows down the component tree. This is referred to as one-way data flow. State, which will be discussed in the next chapter, can be passed from parent to child components as props.

## Using props

In your **HomePage** component, you can pass a custom title prop to the Header component, just like you'd pass HTML attributes:

```html
<!-- index.html -->

<html lang="en">
    <head>
        <title>Displaying data with props</title>

        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1It"/>
        <meta name="description" content="Displaying data with props"/>
        <meta name="author" content="Peter Olum"/>

        <script src="https://unpkg.com/react@18/umd/react.development.js" defer></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" defer></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js" defer></script>
        <script src="scripts/script.jsx" type="text/jsx" defer></script>
    </head>
    <body>
        <div id="app">

        </div>
    </body>
</html>
```

```jsx
const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);

function Header(props) {
    console.log(props); // { title: "React" }
    return (
        <>
            <h1>Develop. Preview. Ship.</h1>
        </>
    );
}

function HomePage() {
    return (
        <>
            <Header title="React" />
        </>
    );
}

root.render(
    <HomePage />
);
```

`Header`, the child component, can accept those props as its first function parameter:

If you `console.log()` props, you can see that it's an object with a title property.

Since props is an object, you can use [object destructuring](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to explicitly name the values of props inside your function parameters:

## Using variables in JSX

To use the `title` prop, add **curly braces** `{}`. These are a special JSX syntax that allows you to write regular JavaScript directly inside your JSX markup.

You can think of curly braces as a way to enter "JavaScript land" while you are in "JSX land". You can add any **JavaScript expression** (something that evaluates to a single value) inside curly braces. For example:

1. An **object property** with dot notation:

```jsx
// Example

function Header(props) {
    console.log(props); // { title: "React" }
    return (
        <>
            <h1>{props.title}</h1>
        </>
    );
}
```

```jsx
// script/scripts.jsx

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);

function Header(props) {
    console.log(props); // { title: "React" }
    return (
        <>
            <h1>{props.title}</h1>
        </>
    );
}

function HomePage() {
    return (
        <>
            <Header title="React" />
        </>
    );
}

root.render(
    <HomePage />
);
```

2. A **template literal**:

```jsx
// Example

function Header({ title }) {
    console.log(title); // "React" 
    return (
        <>
            <h1>{`Cool ${title}`}</h1>
        </>
    );
}
```

```jsx
// script/scripts.jsx

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);

function Header({ title }) {
    console.log(title); // "React" 
    return (
        <>
            <h1>{`Cool ${title}`}</h1>
        </>
    );
}

function HomePage() {
    return (
        <>
            <Header title="React" />
        </>
    );
}

root.render(
    <HomePage />
);
```

3. The `returned value of a function`:

```jsx
// example

function createTitle(title) {
    if (title) {
        return title;
    } else {
        return 'Default title';
    }
}

function Header({ title }) {
    console.log(title); // "React" 
    return (
        <>
            <h1>{createTitle(title)}</h1>
        </>
    );
}
```


```jsx
// script/scripts.jsx

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);

function createTitle(title) {
    if (title) {
        return title;
    } else {
        return 'Default title';
    }
}

function Header({ title }) {
    console.log(title); // "React" 
    return (
        <>
            <h1>{createTitle(title)}</h1>
        </>
    );
}

function HomePage() {
    return (
        <>
            <Header title="React" />
        </>
    );
}

root.render(
    <HomePage />
);
```

4. Or **ternary operators**:

```jsx
// example

function Header({ title }) {
    console.log(title); // "React" 
    return (
        <>
            <h1>{title ? title : 'Default title'}</h1>
        </>
    );
}
```

```jsx
// script/scripts.jsx

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);

function Header({ title }) {
    console.log(title); // "React" 
    return (
        <>
            <h1>{title ? title : 'Default title'}</h1>
        </>
    );
}

function HomePage() {
    return (
        <>
            <Header title="React" />
        </>
    );
}

root.render(
    <HomePage />
);
```

You can now pass any string to your title prop, or, if you used the ternary operator, you could even not pass a title prop at all, since you've accounted for the default case in your component:

```jsx
// script/scripts.jsx

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);

function Header({ title }) {
    console.log(title); // "React" 
    return (
        <>
            <h1>{title ? title : 'Default title'}</h1>
        </>
    );
}

function HomePage() {
    return (
        <>
            <Header />
        </>
    );
}

root.render(
    <HomePage />
);
```

Your component now accepts a generic title prop which you can reuse in different parts of your application. All you need to do is change the title string:

```jsx
// Example

function HomePage() {
    return (
        <>
            <Header />
            <Header title='React'/>
            <Header title='A new title'/>
        </>
    );
}
```

```jsx
const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);

function Header({ title }) {
    console.log(title); // "React" 
    return (
        <>
            <h1>{title ? title : 'Default title'}</h1>
        </>
    );
}

function HomePage() {
    return (
        <>
            <Header />
            <Header title='React'/>
            <Header title='A new title'/>
        </>
    );
}

root.render(
    <HomePage />
);
```

## Iterating through lists

It's common to have data that you need to show as a list. You can use array methods to manipulate your data and generate UI elements that are identical in style but hold different pieces of information.

Add the following array of names to your `HomePage` component:

```jsx
// Example

function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <>
            <Header title='Develop. Preview. Ship.'/>
            <ul>
                {names.map((name) => (<li>{name}</li>))}
            </ul>
        </>
    );
}
```

```jsx
// scripts/script.jsx

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);

function Header({ title }) {
    console.log(title); // "React" 
    return (
        <>
            <h1>{title ? title : 'Default title'}</h1>
        </>
    );
}

function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <>
            <Header title='Develop. Preview. Ship.'/>
            <ul>
                {names.map((name) => (<li>{name}</li>))}
            </ul>
        </>
    );
}

root.render(
    <HomePage />
);
```

You can then use the `array.map()` method to iterate over the array and use an arrow function to map a name to a list item.

Notice how you've used curly braces to weave in and out of "JavaScript" and "JSX" land.

If you run this code, React will give us a warning about a missing key prop. This is because React needs something to uniquely identify items in an array so it knows which elements to update in the DOM.

You can use the names for now since they are currently unique, but it's recommended to use something guaranteed to be unique, like an item ID.

```jsx
// example

function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <>
            <Header title='Develop. Preview. Ship.'/>
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
        </>
    );
}
```

```jsx
// scripts/script.jsx

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);

function Header({ title }) {
    console.log(title); // "React" 
    return (
        <>
            <h1>{title ? title : 'Default title'}</h1>
        </>
    );
}

function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <>
            <Header title='Develop. Preview. Ship.'/>
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
        </>
    );
}

root.render(
    <HomePage />
);
```

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/react-foundations/003-displaying-data-with-props/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/react-foundations/003-displaying-data-with-props/">Visit website</a>
  </dd>
</dl>