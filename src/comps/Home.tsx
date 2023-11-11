import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import projects from '../projects.json';

export const Home = () => {
    useEffect(() => {
        projects.forEach((project): void => {
            console.log(project.name);
        });
    }, []);

    return (
        <div className='basement'>
            <div className='chev-container'>
                <div className='nested-chev-container-idk'>
                    <h2>
                        Hey, I'm <span style={{ color: '#c1d5e9' }}>chev</span>
                    </h2>
                    <p>A hobbyist programmer who codes for fun</p>
                </div>
            </div>
            <div className='about-me'>
                <h2 className='intro-title'>About me</h2>
                <p className='intro-description'>
                    my balls are very, very {'itchy'}
                </p>
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
        </div>
    );
};
