
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