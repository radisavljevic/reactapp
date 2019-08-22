import React from 'react'

function Person({person}) {
    return (
        <div>
             <h2>Ja sam {person.name}. Imam {person.age} godina. Znam {person.skill} </h2>
        </div>
    )
}

export default Person
