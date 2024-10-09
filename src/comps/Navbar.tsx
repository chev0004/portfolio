import { Link } from 'react-router-dom';

interface NavbarProps {
	language: string;
	toggleLanguage: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, toggleLanguage }) => {
	return (
		<nav
			className="navbar"
			style={{
				position: 'fixed',
				zIndex: 1,
			}}
		>
			<div
				style={{
					position: 'absolute',
					backgroundColor: '#000',
					width: '100%',
					height: '100%',
					opacity: '0.4',
				}}
			></div>
			<div className="clickaballs">
				<div
					className="links"
					style={{
						zIndex: 4,
						height: '20px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Link
						to="/"
						style={{
							fontSize: language === 'jp' ? '0.9rem' : undefined,
						}}
					>
						{language === 'en' ? 'Home' : 'ホーム'}
					</Link>
					<Link
						to="https://www.youtube.com/@chevvvv/"
						target="_blank"
						rel="noopener noreferrer"
						style={{
							fontSize: language === 'jp' ? '0.9rem' : undefined,
						}}
					>
						{language === 'en' ? 'YouTube' : 'ユーチューブ'}
					</Link>
					<Link
						to="https://github.com/chev0004"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</Link>
					<div
						className="languageToggle"
						onClick={toggleLanguage}
						style={{
							fontSize: language === 'en' ? '0.9rem' : undefined,
						}}
					>
						{language === 'jp' ? 'English' : '日本語'}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
