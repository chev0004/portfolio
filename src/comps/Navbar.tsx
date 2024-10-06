import { Link } from 'react-router-dom';

interface NavbarProps {
	language: string;
	toggleLanguage: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, toggleLanguage }) => {
	return (
		<nav className="navbar">
			<div className="clickaballs">
				<div
					className="links"
					style={{
						height: '20px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<div
						className="languageToggle"
						onClick={toggleLanguage}
						style={{
							fontSize: language === 'en' ? '0.9rem' : undefined,
						}}
					>
						{language === 'jp' ? 'English' : '日本語'}
					</div>
					<Link
						to="/"
						style={{
							fontSize: language === 'jp' ? '0.9rem' : undefined,
						}}
					>
						{language === 'en' ? 'Home' : 'ホーム'}
					</Link>
					{/* <Link
						to="https://github.com/chev0004"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</Link> */}
					<Link
						to="https://www.youtube.com/@chevvvv/"
						target="_blank"
						rel="noopener noreferrer"
						style={{
							fontSize: language === 'jp' ? '0.9rem' : undefined,
						}}
					>
						{language === 'en' ? 'Youtube' : 'ユーチューブ'}
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
