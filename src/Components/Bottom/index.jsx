import React from 'react';
import styled from 'styled-components'

const Bottom=()=>{
    return(
        <BottomStyle>
            <div className="row">
                <div className="firstIn">HOME</div>
                <div className="firstIn">SHOP GUIDE</div>
                <div className="firstIn">TERMS OF USE</div>
                <div className="firstIn">PRIVAY POLICY</div>
            </div>
            <div className="second">MON-FRI 15:00 - 18:00, SAT.SUN REDDAY OFF</div>
            <div className="third">농협 1094-12-029160</div>
            <div className="row">
                <div className="last">COMPANY</div>
                <div className="last">OWNER</div>
                <div className="last">TEL</div>
                <div className="last">E-MAIL</div>
            </div>
            <div className="row">
                <div className="last">BUSINESS NUMBER</div>
                <div className="last">MAIL ORDER LICENSE</div>
            </div>
            <div className="last">ADDRESS</div>
        </BottomStyle>
    )
}


export const BottomStyle=styled.div`
   width:100%;
   display:flex;
   align-items:center;
   justify-content:center;
   flex-flow:column;
   margin-bottom:100px;
   margin-top:100px;
   .row{
       display:flex;
       flex-flow:row;
   }
   .firstIn{
       padding:10px;
       ${(props)=>props.theme.s_font};
       color:${(props)=>props.theme.gray_1};
   }
   .second{
        ${(props)=>props.theme.m_font};
   }
   .third{
        ${(props)=>props.theme.s_font};
       color:${(props)=>props.theme.gray_1};
       margin-bottom:30px;
   }
   .last{
       ${(props)=>props.theme.ss_font};
       color:${(props)=>props.theme.gray_1};
       padding:5px;
   }

`

export default Bottom;
