import { Link } from 'react-router-dom'

export default function NavigationBar() {
    return (
        <ul >
            <li>
			    <Link to={'/Bartendthere/home'}>Home</Link>
            </li>
            <li>
                <Link to={'/Bartendthere/about'}>About</Link>
            </li>
            <li>
                <Link to={'/Bartendthere/gallery'}>Gallery</Link>
            </li>
            <li>
                <Link to={'/Bartendthere/contact'}>Contact</Link>
            </li>
        </ul>
    )
}