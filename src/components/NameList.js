import React from 'react'
import Person from './Person';

function NameList() {
   // const names = ['Petar', 'Andrej', 'Danilo'];
    const persons = [
        {
            id: 1,
            name: 'Petar',
            age: 36,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Dzoni',
            age: 40,
            skill: 'Admin'
        },
        {
            id: 3,
            name: 'Danilo',
            age: 35,
            skill: 'CRA'
        }
    ];
    //const nameList = names.map(name => <h2>{name}</h2>)
    const personList = persons.map(person => <Person key={person.id} person={person} />)
    return (
        <div>{personList}</div>
    )
}

export default NameList
