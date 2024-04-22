import { MouseEvent } from 'react';
function ListGroup() {

    let cities = [
        'New York',
        'Paris',
        'Nairobi',
        'London'
    ];

    const handleClick = (event: MouseEvent) => console.log(event);

    return (
    <>
    <h1>List</h1>
        <ul className="list-group">
           {cities.map(item => <li key={item} onClick={handleClick} className="list-group-item">{item}</li>)}
        </ul>
    </>
    );
}

export default ListGroup;