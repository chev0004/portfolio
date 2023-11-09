import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Balls } from './Balls';

export interface Ballsack {
    color: string;
    size: number;
}
export const Home = () => {
    const [title, setTitle] = useState('you are in the basement');
    const [isTrue, setIsTrue] = useState(false);

    const ballsack: Ballsack = {
        color: 'brown',
        size: 10,
    };

    const handleClick = () => {
        setIsTrue(!isTrue);
        setTitle(
            isTrue ? 'you are in the basement' : 'you are not in the basement'
        );
    };

    useEffect(() => {
        console.log('balls!');
    });

    return (
        <div className='home'>
            <h2>{title}</h2>
            <Balls ballsack={ballsack} handleClick={handleClick} />
            <Link to='/'>go back</Link>
        </div>
    );
};
