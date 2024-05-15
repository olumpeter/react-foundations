
# Adding interactivity with state

Let's explore how React helps us add interactivity with **state** and **event handlers**.

As an example, let's create a "Like" button inside your **HomePage** component. First, add a button element inside the **return()** statement:

```jsx
const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);

root.render(
    <HomePage />
);

function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']

    return (
        <>
            <Header title="Develop. Preview. Ship."/>

            <ul>
                {names.map((name) => <li key={name}>{name}</li>) }
            </ul>

            <button>Like</button>
        </>
    );
}

function Header(prop) {
    return (
        <>
            <h1>{prop.title}</h1>
        </>
    );
}
```

## Listening to events

To make the button do something when clicked, you can use the `onClick` event:

```jsx
function HomePage() {
    // ...
    return (
        <>
            {/* ... */}
            <button onClick={}>Like</button>
        </>
    );
}
```

In React, event names are camelCased. The `onClick` event is one of many possible events you can use to respond to user interaction. For example, you can use `onChange` for input fields or `onSubmit` for forms.

## Handling events

You can define a function to "handle" events whenever they are triggered. Create a function before the return statement called `handleClick()`:

```jsx
function HomePage() {
    // ...

    function handleClick() {
        console.log('Increment like count');
    }

    return (
        <>
            {/* ... */}
            <button onClick={}>Like</button>
        </>
    );
}
```

## State and hooks

React has a set of functions called [hooks](https://react.dev/learn). Hooks allow you to add additional logic such as state to your components. You can think of **state** as any information in your UI that changes over time, usually triggered by user interaction. For example Toggle and likes button.

You can use *state* to store and increment the number of times a user has clicked the "Like" button. In fact, the React hook used to manage state is called: `useState()`

Add `useState()` to your project. It returns an array, and you can access and use those array values inside your component using **array destructuring**:

The first item in the array is the state value, which you can name anything. It's recommended to name it something descriptive.

The second item in the array is a function to update the value. You can name the update function anything, but it's common to prefix it with set followed by the name of the state variable you're updating.

You can also take the opportunity to add the initial value of your likes state to 0:

Then, you can check the initial state is working by using the state variable inside your component.

Finally, you can call your state updater function, setLikes in your HomePage component, let's add it inside the handleClick() function you previously defined.

```jsx
function HomePage() {
    // ...

    const [likes, setLikes] = React.useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <>
            {/* ... */}

            <button onClick={handleClick}>Likes ({likes})</button>
        </>
    );
}
```

Clicking the button will now call the `handleClick` function, which calls the `setLikes` state updater function with a single argument of the current number of likes + 1.

**Note**: Unlike props which are passed to components as the first function parameter, the state is initiated and stored within a component. You can pass the state information to children components as props, but the logic for updating the state should be kept within the component where state was initially created.

## Managing state

This was only an introduction to state, and there's more you can learn about managing state and data flow in your React applications. To learn more, we recommend you go through the [Adding Interactivity](https://react.dev/learn/adding-interactivity) and [Managing State](https://react.dev/learn/managing-state) sections in the React documentation.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/react-foundations/004-adding-interactivity-with-state/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/react-foundations/004-adding-interactivity-with-state/">Visit website</a>
  </dd>
</dl>