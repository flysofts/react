import React from 'react'
import { styled } from 'styled-components'

const Styled = styled.div`
 background-color: lightblue;
 font-size: 3rem;
ul{
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    
}

`

function Style() {
    let Menu = ["메뉴1", "메뉴2", "메뉴3", "메뉴4", "메뉴5"];
  return (
    
    <Styled>
        <ul>
         {
            Menu.map((el, i)=>{
                return (
                    <li className='text-center' key={i}>{el}</li>
                ) 
            })
         }
        </ul>
    </Styled>
  )
}

export default Style