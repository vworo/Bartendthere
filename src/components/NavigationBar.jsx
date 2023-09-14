import { Link } from 'react-router-dom'

export default function NavigationBar() {
    return (
        <ul >
            <li>
			    <Link to={'/home'}>Home</Link>
            </li>
            <li>
                <Link to={'/about'}>About</Link>
            </li>
            <li>
                <Link to={'/gallery'}>Gallery</Link>
            </li>
            <li>
                <Link to={'/faqs'}>FAQs</Link>
            </li>
            <li>
                <Link to={'/contact'}>Contact</Link>
            </li>
        </ul>
    )
}