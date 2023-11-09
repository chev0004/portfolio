import { Ballsack } from './Home';
export const Balls = ({
    ballsack,
    handleClick,
}: {
    ballsack: Ballsack;
    handleClick: () => void;
}) => {
    return (
        <div>
            <div>
                {ballsack.color} {ballsack.size}
                <button onClick={handleClick}>escape NOW</button>
            </div>
        </div>
    );
};
