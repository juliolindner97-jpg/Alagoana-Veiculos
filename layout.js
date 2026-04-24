// Main layout component
export default function Layout({ children }) {
    return (
        <div>
            <header>
                <h1>Alagoana Veículos</h1>
            </header>
            <main>{children}</main>
        </div>
    )
}