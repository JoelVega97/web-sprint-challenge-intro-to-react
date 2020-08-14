// Write your Character component here

import React from 'react'
import CharacterCard from './CharacterCard.js'

export default function Character({data}){
    return(
        <div>
            {data.map(el => {
                return <CharacterCard name = {el.name}  gender = {el.gender} height = {el.height} mass = {el.mass} birthYR = {el.birth_year} skin = {el.skin_color} eyes = {el.eye_color} />
            })}
        </div>
    )
}
