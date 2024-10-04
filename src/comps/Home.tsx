// import { useEffect } from 'react';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import projects from '../projects.json';

export const Home = () => {
	// useEffect(() => {
	// 	projects.forEach((project): void => {
	// 		console.log(project.name);
	// 	});
	// }, []);

	// const [isCopied, setIsCopied] = useState(false);

	const copyToClipboard = async () => {
		await navigator.clipboard.writeText('chevv0004@gmail.com');
		// setIsCopied(true);
		// setTimeout(() => {
		// 	setIsCopied(false);
		// }, 2000);
	};

	return (
		<div className="basement">
			<div className="chev-container">
				<div className="nested-chev-container-idk">
					<div>
						<h2>
							Hey, I'm{' '}
							<span style={{ color: '#c1d5e9' }}>chev</span>
						</h2>
					</div>
					<div>
						<p>Japanese-speaking Front End Developer</p>
					</div>
				</div>
			</div>
			<div className="about-me">
				<div>
					<h2 className="intro-title">About me</h2>
				</div>
				<div>
					<p className="intro-description">
						I'm an 18-year-old web developer with over three years
						of experience building dynamic websites and
						applications. I focus on making web apps that are for
						the sake of convenience, things that would just make
						things a little easier. (I use Arch btw).
						<br />
						<br />
						I also speak Japanese fluently and have worked entirely
						in Japanese-speaking environments. With over 5600
						kanji/vocabulary memorized, clear intonation, and a deep
						understanding of the Japanese culture, I sometimes even
						fooled native Japanese into thinking I was also one!
						<br />
						<br />
						Aside from development, I enjoy creating digital art
						when I’m not buried in code.
					</p>
				</div>
			</div>
			<div className="projects">
				<div className="project-title">
					<h2 className="intro-title">Projects</h2>
				</div>
				{projects.map((project) => {
					return (
						<div className="project-jail" key={project.name}>
							<div className="project-jail-innerjail">
								<Link
									to={project.image}
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										className="thumbnail"
										src={project.image}
										alt={project.name}
									/>
								</Link>

								{project.link ? (
									<Link
										to={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="project-jail-title"
									>
										{project.name}
									</Link>
								) : (
									<span className="project-jail-title">
										{project.name}
									</span>
								)}

								<p>{project.description}</p>

								{project.github && (
									<Link
										to={project.github}
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											className="gitty"
											src={'./images/github.svg'}
											alt={project.name}
										/>
									</Link>
								)}
							</div>
						</div>
					);
				})}
			</div>
			<div className="about-me">
				<div>
					<h2 className="intro-title">Get in Touch</h2>
				</div>
				<div style={{ height: '200px' }}>
					<p className="intro-description">
						Whether you’re looking to collaborate on a project, have
						a question, or just want to chat, feel free to reach
						out! I'm always open to discussing new opportunities,
						ideas, or just sharing thoughts on development.
						<br />
						<br />
						You can contact me via email at
						<span
							style={{ color: '#c1d5e9', cursor: 'pointer' }}
							onClick={copyToClipboard}
						>
							{' chevv0004@gmail.com '}
						</span>
						or through my social media below.
					</p>
				</div>
			</div>
		</div>
	);
};
