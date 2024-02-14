export const Navbar = () => {
    const reloadPage = () => {
        window.location.reload()
    }

    return (
        <nav className="bg-primary py-4 fixed top-0 left-0 right-0">
            <div className="container mx-auto px-4">
                <img src="./white-logo.png" alt="Logo" className="h-9" onClick={() => reloadPage()} />
            </div>
        </nav>
    );
}

export default Navbar;
