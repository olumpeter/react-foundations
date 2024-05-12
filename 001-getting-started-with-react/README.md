# Getting Started with React

To use React in your newly created project, load two React scripts from an external website called [unpkg.com](https://unpkg.com/):

- **react** is the core React library.
- **react-dom** provides DOM-specific methods that enable you to use React with the DOM.

## Manipulating the DOM with plain JavaScript

```html
<!-- index.html -->

<html lang="en">
    <head>
        <title>Getting started with React</title>

        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="author" content="Peter Olum"/>
        <meta name="description" content="Getting started with React"/>

        <script src="https://unpkg.com/react@18/umd/react.development.js" type="text/javascript" defer></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" defer></script>
        <script src="scripts/script.js" type="text/javascript" defer></script>
    </head>
    <body>
        <div id="app">

        </div>
    </body>
</html>
```

```js
const app = document.getElementById('app');
const header = document.createElement('h1');
const text = 'Develop. Preview. Ship.';
const headerContent = document.createTextNode(text);
header.appendChild(headerContent)
app.appendChild(header);
```

Instead of directly manipulating the DOM with plain JavaScript, remove the DOM methods that you had added previously, and add the `ReactDOM.createRoot()` method to target a specific DOM element and create a root to display your React Components in. Then, add the `root.render()` method to render your React code to the DOM.

This will tell React to render our `<h1>` title inside our `#app` element.

## Manipulating the DOM with jsx

```html
<!-- index.html -->
<html lang="en">
    <head>
        <title>Getting started with React</title>

        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="author" content="Peter Olum"/>
        <meta name="description" content="Getting started with React"/>

        <script src="https://unpkg.com/react@18/umd/react.development.js" defer></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" defer></script>
        <script src="scripts/script.jsx" type="text/jsx" defer></script>
    </head>
    <body>
        <div id="app">

        </div>
    </body>
</html>
```

```jsx
// script.jsx in the scripts folder

// Manipulating the DOM with JSX

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(
    <h1>Develop. Preview. Ship.</h1>
);
```
If you try to run this code in the browser, you will get a syntax error:

This is because `<h1>...</h1>` is not valid Javascript. This piece of code is **JSX**.

## What is JSX?

JSX is a syntax extension for JavaScript that allows you to describe your UI in a familiar *HTML-like* syntax. The nice thing about JSX is that apart from following three JSX rules, you don't need to learn any new symbols or syntax outside of HTML and JavaScript.

### The Rules of JSX 

#### 1. Return a single root element 

To return multiple elements from a component, **wrap them with a single parent tag.**

For example, you can use a <div>:

```JSX
<div>
  <h1>Hedy Lamarr's Todos</h1>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
  >
  <ul>
    ...
  </ul>
</div>
```

If you don’t want to add an extra `<div> `to your markup, you can write `<>` and `</>` instead:

```JSX
<>
  <h1>Hedy Lamarr's Todos</h1>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
  >
  <ul>
    ...
  </ul>
</>
```

This empty tag is called a *Fragment*. Fragments let you group things without leaving any trace in the browser HTML tree.

>**Why do multiple JSX tags need to be wrapped?**: JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. You can’t return two objects from a function without wrapping them into an array. This explains why you also can’t return two JSX tags without wrapping them into another tag or a Fragment.

2. Close all the tags 

JSX requires tags to be explicitly closed: self-closing tags like `<img>` must become `<img />`, and wrapping tags like `<li>oranges` must be written as `<li>oranges</li>`.

This is how Hedy Lamarr’s image and list items look closed:

```JSX
<>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
   />
  <ul>
    <li>Invent new traffic lights</li>
    <li>Rehearse a movie scene</li>
    <li>Improve the spectrum technology</li>
  </ul>
</>
```

3. camelCase ~all~ most of the things!

JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. In your own components, you will often want to read those attributes into variables. But JavaScript has limitations on variable names. For example, their names can’t contain dashes or be reserved words like `class`.

This is why, in React, many HTML and SVG attributes are written in camelCase. For example, instead of `stroke-width` you use `strokeWidth`. Since `class` is a reserved word, in React you write `className` instead, named after the corresponding DOM property:

```jsx
<img 
  src="https://i.imgur.com/yXOvdOSs.jpg" 
  alt="Hedy Lamarr" 
  className="photo"
/>
```

You can find [all these attributes in the list of DOM component props](https://react.dev/reference/react-dom/components/common). If you get one wrong, don’t worry—React will print a message with a possible correction to the browser console.

>**Pitfall**: For historical reasons, `aria-*` and `data-*` attributes are written as in HTML with dashes.

### Adding Babel to your project

To add Babel to your project, copy and paste the following script in your index.html file:

```html
<!-- index.html -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

In addition, you will need to inform Babel what code to transform by changing the script type to `type=text/jsx`.

```html
<!-- index.html -->

<html lang="en">
    <head>
        <title>Getting started with React</title>

        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="author" content="Peter Olum"/>
        <meta name="description" content="Getting started with React"/>

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

To confirm it's working correctly, open your HTML file in the browser.

Comparing the **declarative** React code you just wrote:

```jsx
// script.jsx

// Manipulating the DOM with JSX

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(
    <h1>Develop. Preview. Ship.</h1>
);
```

to the imperative JavaScript code you wrote in the previous section:

```js

// script.js

// Manipulating the DOM with plain JavaScript

const app = document.getElementById('app');
const header = document.createElement('h1');
const text = 'Develop. Preview. Ship.';
const headerContent = document.createTextNode(text);
header.appendChild(headerContent)
app.appendChild(header);
```

You can start to see how using React enables you to cut down a lot of repetitive code.

And this is exactly what React does, it's a library that contains reusable snippets of code that perform tasks on your behalf - in this case, updating the UI.

## Essential JavaScript for React

While you can learn JavaScript and React at the same time, being familiar with JavaScript can make the process of learning React easier.

In the next sections, you will be introduced to some core concepts of React from a JavaScript perspective. Here's a summary of the JavaScript topics that will be mentioned:

- [Functions](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Functions) and [Arrow Functions](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Objects](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Arrays and array methods](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Destructuring](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [Template literals](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Template_literals)
[Ternary Operators](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
[ES Modules and Import / Export Syntax](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Modules)

While this course does not dive into JavaScript, it's good practice to stay up to date with the latest versions of JavaScript. But if you don't feel proficient in JavaScript yet, don't let this hinder you from starting to build with React!