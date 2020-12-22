// 버튼
import React from 'react'
import styled from 'styled-components';

const ButtonCom=(props)=>{
    return(
            <Btn onClick={props.onClick}>
                <div>
                    {props.text}
                </div>
            </Btn>
    )
}
const Btn=styled.button`
    all:unset;
    background-color:${(props)=>props.theme.gray_1};
    ${(props)=>props.theme.s_font};
    color:white;
    padding:5px;
    border-radius:3px;
    margin-top:30px;
`

export default ButtonCom;