
const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);

root.render(
    <HomePage />
);

function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    const [likes, setLikes] = React.useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <>
            <Header title='Develop. Preview. Ship.' />

            <ul>
                {names.map((name) => <li key={name}>{name}</li>)}
            </ul>

            <button onClick={handleClick}>Likes ({likes})</button>
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