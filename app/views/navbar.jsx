import { Link } from "remix";

export default function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/post">Posts</Link>
            <Link to="/post/13">Post 13</Link>
        </nav>
    );
}