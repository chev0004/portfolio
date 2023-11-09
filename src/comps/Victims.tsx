import { useParams } from 'react-router-dom';
export const Victims = () => {
    const { id } = useParams();
    return <div>Victim - {id}</div>;
};
