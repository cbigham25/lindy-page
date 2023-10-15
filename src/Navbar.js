import { Link, useMatch, useResolvedPath } from "react-router-dom"


export default function Navbar() {
    return (
        <header>
            <nav className="nav">
                <Link to="/" className="site-title">
                    M. J. Lindemann
                </Link>
                <ul>
                    <CustomLink to="/about">About</CustomLink>
                    <CustomLink to="/books">Books</CustomLink>
                    <li>
                        <a href="/blog">Blog</a>
                    </li>
                </ul>
            </nav>
            <subheader>
                Mailing List
            </subheader>
        </header>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
