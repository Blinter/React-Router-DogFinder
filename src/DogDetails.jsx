import React, {
    useState,
    useEffect
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
    useNavigate,
    useParams
} from 'react-router-dom';
import dogs from './dogs';

function DogDetails() {
    const navigate = useNavigate();
    const { dogName } = useParams();
    const [currentDog, setCurrentDog] = useState(null);
    useEffect(() => {
        if (!dogName) {
            navigate('/dogs', { replace: true });
            return;
        }
        const foundDog = dogs.find(dog =>
            dog.name.toLowerCase() === dogName.toLowerCase());
        if (foundDog)
            setCurrentDog(foundDog);
        else
            navigate('/dogs', { replace: true });
    }, [dogName, navigate]);
    return (currentDog ?
        (<div>
            <h1>{currentDog.name}</h1>
            <img src={currentDog.src} alt={currentDog.name} />
            <ul>{currentDog.facts.map(fact => (
                <li key={uuidv4()}>{fact}</li>
            ))}</ul>
        </div>) : ('')
    );
}

export default DogDetails;