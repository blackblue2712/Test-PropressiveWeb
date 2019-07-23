import React from 'react';

const Card  = ( {robot} ) => {

    //  For testing error boundry
    // if(true) {
    //     throw new Error("ERROR");
    // }


    return (
        <div className="tc bg-light-green div br3 pa3 ma2 grow bw2 shadow-5" style={{float: "left"}}>
            <img alt={robot.username} src={`https://robohash.org/${robot.username}?200x200`} />
            <div>
                <h2>{robot.name}</h2>
                <p>{robot.email}</p>
            </div>
        </div>
    );
}


export default Card;
