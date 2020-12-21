import React from 'react';
import styled from 'styled-components'

const Bottom=()=>{
    return(
        <BottomStyle>
            <div className={"container"}>
                <div className={"title"}>
                    BANK INFO
                </div>
                <div className={"description"}>
                    무통장계좌                  
                </div>
                <div className={"description"}>
                    농협은행                      
                </div>
                <div className={"description"}>
                    1094-12-029160                        
                </div>
            </div>
            <div className={"container"}>
                <div className={"title"}>
                    CS CENTER
                </div>
                <div className={"description"}>
                    010-1234-1234                   
                </div>
                <div className={"description"}>
                    평일 14:00~19:00           
                </div>
                <div className={"description"}>
                    토,일 공휴일 휴무                     
                </div>
            </div>
            <div className={"container"}>
                <div className={"title"}>
                    Delivery
                </div>
                <div className={"description"}>
                    배송조회
                </div>
            </div>
            <div className={"container"}>
                <div className={"title"}>
                    SNS
                </div>
                <div className={"descriptionBlock"}>
                    instagram
                </div>
                <div className={"descriptionBlock"}>
                    facebook
                </div>
                
            </div>
        </BottomStyle>
    )
}


export const BottomStyle=styled.div`
    width:100%;
    padding:5% 0 5% 0;
    display:flex;
    align-items: start;
    justify-content:space-around;
    .container{
        display:flex;
        flex-flow:column;
        align-items: center;
        justify-content: center;
    }
    .title{
        ${(props)=>props.theme.b_font};
        padding:20px;
    }
    .description{
        ${(props)=>props.theme.s_font};
    }
    .descriptionBlock{
        ${(props)=>props.theme.s_font};
        padding:5px;
    }

`

export default Bottom;
