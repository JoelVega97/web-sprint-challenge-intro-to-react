import React from 'react'
import styled from 'styled-components'

// export default function CardMaker({name, gender, height, mass, birthYR, skin, eyes}){


    const CardStyles = styled.div`
    margin: 5% 25%;
    border: solid 5px black;
    border-radius: 15px;
    box-shadow: 10px 10px 10px black;
    `


    export default function CharacterCard(props){
    console.log(props)
    return (
      <CardStyles>
          <div>
            <h2>{props.name}</h2>
          </div>
          <div>
             <p> Gender: {props.gender} </p>
             <p> Height: {props.height} </p>
             <p> Mass: {props.mass} </p>
             <p> Year they were born/made: {props.birthYR} </p>
             <p> Skin color: {props.skin} </p>
             <p> Eye color: {props.eyes} </p>
          </div>  
      </CardStyles>
    )

}