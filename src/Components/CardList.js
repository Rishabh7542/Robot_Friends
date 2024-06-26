import React from 'react';
import Card from './Card.js';


const CardList = ({ robots }) => {
    const cardArray = robots.map((user, i) => {
        return (<Card
            key={i}
            id={robots[i].Id}
            name={robots[i].name}
            username={robots[i].username}
            email={robots[i].email} />);
    })
    return (
        <div>
            {cardArray};
        </div>
    );
}

export default CardList;