import { getSuggestedQuery } from '@testing-library/dom';
import { useState } from 'react';

const GuestList: React.FC = () => {
    const [name, setName] = useState('');
    // TypeScript needs to know what kind of array is [guests]
    // In order to do that, we need to provide <string[]> in
    // useState to let TS know the type of the array
    const [guests, setGuests] = useState<string[]>([]);

    const onClick = () => {
        setName('');
        setGuests([...guests, name]);
    };

    return (
        <div>
            <h3>Guest List</h3>
            <ul>
                {guests.map((guest) => (
                    <li key={guest}> {guest} </li>
                ))}
            </ul>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Add Guest</button>
        </div>
    );
};

export default GuestList;
