import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>The Dojo Blog</h1>
            <div className='links'>
                <Link
                    to='/'
                    style={{
                        color: 'white',
                        backgroundColor: '#f1356d',
                        borderRadius: '4px',
                        textDecoration: 'none',
                    }}
                >
                    Home
                </Link>
                <Link to='/basement'>basement</Link>
            </div>
        </nav>
    );
};
