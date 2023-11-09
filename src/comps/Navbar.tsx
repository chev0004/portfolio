import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='clickaballs'>
                <div className='links'>
                    <Link to='/'>Home</Link>
                    <Link
                        to='https://github.com/chev0004'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        GitHub
                    </Link>
                    <Link
                        to='https://www.youtube.com/@chevvvv/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        YouTube
                    </Link>
                </div>
            </div>
        </nav>
    );
};
