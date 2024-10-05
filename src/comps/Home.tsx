import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import projects from '../projects.json';
import english from '../locales/english.json';
import japanese from '../locales/japanese.json';
import React from 'react';

export const Home = () => {
	const discord = 'xhev';
	const email = 'chevv0004@gmail.com';

	const [language, setLanguage] = useState('en');
	const [translations, setTranslations] = useState(english);

	setLanguage('en	');

	useEffect(() => {
		if (language === 'jp') {
			setTranslations(japanese);
		} else {
			setTranslations(english);
		}
	}, [language]);

	return (
		<div className="basement">
			<div className="chev-container">
				<div className="nested-chev-container-idk">
					<div>
						<h2
							style={{
								fontSize: language === 'jp' ? '54px' : '86px',
							}}
						>
							{translations.greetings}
							<span style={{ color: '#c1d5e9' }}>
								{translations.name}
							</span>
							{translations.greetings2}
						</h2>
					</div>
					<div>
						<p>{translations.title}</p>
					</div>
				</div>
			</div>
			<div className="about-me">
				<div>
					<h2 className="intro-title">{translations.about}</h2>
				</div>
				<div>
					<p
						className="intro-description"
						dangerouslySetInnerHTML={{
							__html: translations.intro.replace(/\n/g, '<br />'),
						}}
					></p>
				</div>
			</div>
			<div className="projects">
				<div className="project-title">
					<h2 className="intro-title">Projects</h2>
				</div>
				{projects.map((project) => {
					return (
						<div
							className="project-jail"
							key={
								language === 'jp'
									? project.name.japanese
									: project.name.english
							}
						>
							<div className="project-jail-innerjail">
								<Link
									to={project.image}
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										className="thumbnail"
										src={project.image}
										alt={
											language === 'jp'
												? project.name.japanese
												: project.name.english
										}
									/>
								</Link>

								{project.link ? (
									<Link
										to={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="project-jail-title"
									>
										{language === 'jp'
											? project.name.japanese
											: project.name.english}
									</Link>
								) : (
									<span className="project-jail-title">
										{language === 'jp'
											? project.name.japanese
											: project.name.english}
									</span>
								)}

								<p>
									{language === 'jp'
										? project.description.japanese
										: project.description.english}
								</p>

								{project.github && (
									<Link
										to={project.github}
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											className="gitty"
											src={'./images/github.svg'}
											alt={
												language === 'jp'
													? project.name.japanese
													: project.name.english
											}
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
						{translations.contact
							.split('\n')
							.map((line, index, arr) => (
								<span key={index}>
									{line}
									{index !== arr.length - 1 && <br />}{' '}
									{/* add <br /> to everything but the last line */}
								</span>
							))}
						<span style={{ color: '#c1d5e9' }}>{` ${email} `}</span>{' '}
						or through my Discord account{' '}
						<span style={{ color: '#c1d5e9' }}>{`${discord}`}</span>
						.
					</p>
				</div>
			</div>
		</div>
	);
};
