
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