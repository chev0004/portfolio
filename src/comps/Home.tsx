import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import projects from '../projects.json';

export const Home = () => {
    useEffect(() => {
        projects.forEach((project): void => {
            console.log(project.name);
        });
    }, []);

    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText('xhev');
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };

    return (
        <div className='basement'>
            <div className='chev-container'>
                <div className='nested-chev-container-idk'>
                    <div>
                        <h2>
                            Hey, I'm{' '}
                            <span style={{ color: '#c1d5e9' }}>chev</span>
                        </h2>
                    </div>
                    <div>
                        <p>A hobbyist programmer who codes for fun</p>
                    </div>
                </div>
            </div>
            <div className='about-me'>
                <div>
                    <h2 className='intro-title'>About me</h2>
                </div>
                <div>
                    <p className='intro-description'>
                        Hey, I'm chev, and I am a hobbyist programmer who codes
                        for fun, mostly making things that I find interesting,
                        or things that I feel are a little convenient to have
                        <br />
                        <br />
                        Most of my experience revolves around making Discord
                        bots, since that's what got me into programming, but
                        I've recently started dabbling into website-making.
                    </p>
                </div>
            </div>
            <div className='projects'>
                <div className='project-title'>
                    <h2 className='intro-title'>Projects</h2>
                </div>
                {projects.map((project) => {
                    return (
                        <div className='project-jail' key={project.name}>
                            <div className='project-jail-innerjail'>
                                <Link
                                    to={project.image}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        className='thumbnail'
                                        src={project.image}
                                        alt={project.name}
                                    />
                                </Link>

                                {project.link ? (
                                    <Link
                                        to={project.link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='project-jail-title'
                                    >
                                        {project.name}
                                    </Link>
                                ) : (
                                    <span className='project-jail-title'>
                                        {project.name}
                                    </span>
                                )}

                                <p>{project.description}</p>

                                {project.github && (
                                    <Link
                                        to={project.github}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <img
                                            className='gitty'
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
            <div className='about-me'>
                <div>
                    <h2 className='intro-title'>Contact</h2>
                </div>
                <div style={{ height: '200px' }}>
                    <p className='intro-description'>
                        For now, you can add me in Discord with my username
                        <span
                            style={{ color: '#c1d5e9', cursor: 'pointer' }}
                            onClick={copyToClipboard}
                        >
                            {isCopied ? ' copied! ' : ' xhev, '}
                        </span>
                        and if you do, please tell me you came from here!
                    </p>
                </div>
            </div>
        </div>
    );
};
