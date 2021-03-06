// 기본 틀
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Modal from 'react-modal';
import LoginPage from './LoginPage';

const Pages = ()=>{
    const[login,setLogin]=useState(false);
    return(
        <div>         
            <div style={{fontSize:32,fontWeight:'bold',marginLeft:40,position:'fixed',top:60}}>
                <StyledLink to ="/">Studio Haena</StyledLink>
            </div>
            {/* 왼쪽 메뉴 */}
            <LeftContainer>
                <Font>
                    <div className="left">
                        <button style={{all:'unset'}} onClick={()=>{
                            window.scrollTo(0,0)
                        }}>
                            SHOP
                        </button>
                    </div>
                </Font>
                <div style={{marginTop:30}}>
                    <Font>
                        <StyledLink to ="/main/product/new_arrivals">
                            <div className="left">
                                NEW ARRIVALS
                            </div>
                        </StyledLink>
                    </Font>
                    <Font>
                        <StyledLink to ="/main/product/out_wears">
                            <div className="left">
                                OUT WEARS
                            </div>
                        </StyledLink>
                    </Font>
                    <Font>
                        <StyledLink to ="/main/product/top">
                            <div className="left">
                                TOP
                            </div>
                        </StyledLink>
                    </Font>
                    <Font>
                        <StyledLink to ="/main/product/bottom">
                            <div className="left">
                                BOTTOM
                            </div>
                        </StyledLink>
                    </Font>
                    <Font>
                        <StyledLink to ="/main/product/acc">
                            <div className="left">
                                ACC
                            </div>
                        </StyledLink>
                    </Font>
                </div>
                <Font>
                    <StyledLink to ="/main/product/sale">
                        <div className="left">
                            SALE
                        </div>
                    </StyledLink>
                </Font>
                <div style={{marginTop:30}}>
                    <Font>
                        <StyledLink to ="/main/board/notice">
                            <div className="left"> 
                                NOTICE
                            </div>
                        </StyledLink>
                    </Font>
                    <Font>
                        <StyledLink to ="/main/board/qna">
                            <div className="left"> 
                                Q&A
                            </div>
                        </StyledLink>
                    </Font>
                    <Font>
                        <StyledLink to ="/main/board/review">
                            <div className="left"> 
                            REVIEW
                            </div>
                        </StyledLink>
                    </Font>
                </div>
                {/* 상단 메뉴 */}
                <RightContainer>
                    <Font>
                        <button style={{all:'unset'}} onClick={()=>{
                            setLogin(true);
                        }}>
                            <div className="right">
                                    LOGIN
                            </div>
                        </button>
                        <Modal
                            isOpen={login}
                            onRequestClose={()=>setLogin(false)}
                            style={customStyles}
                            contentLabel="Example Modal"
                            >
                            <LoginPage onClickExit={()=>setLogin(false)}/>                     
                        </Modal>
                    </Font>
                    <Font>
                        <StyledLink to ="/main/register">
                            <div className="right">
                                REGISTER
                            </div>
                        </StyledLink>
                    </Font>
                     <Font >
                         <StyledLink to ="/main/profile">
                            <div className="right">
                                BAG
                            </div>
                        </StyledLink>
                    </Font>
                     <Font>
                         <div className="right">
                            SEARCH
                         </div>
                    </Font>
                </RightContainer>
                
            </LeftContainer>
        </div>
    );
}


export const StyledLink = styled(Link)`
    text-decoration:none;
    color:black;
    &:focus, &:hover, &:visited, &link, &:active{
        text-decoration:none;
    }
`

const Font=styled.div`
    .left{
        ${(props)=>props.theme.m_font}
        margin-top:10px;
         &:hover{
            transition:all 0.1s ease-in-out;
            color:${(props)=>props.theme.gray_1};
        }
    }
    .right{
        ${(props)=>props.theme.m_font}
        margin-left:30px;
         &:hover{
            transition:all 0.1s ease-in-out;
            color:${(props)=>props.theme.gray_1};
        }
    }
`
const LeftContainer =styled.div`
    width:15vw;
    margin-left:40px;
    position:fixed;
    top:20vh;
    @media ${(props)=>props.theme.mobile}{
       
    }
    
`
const RightContainer = styled.div`
    display:flex;
    position:fixed;
    top:10vh;
    right:5vw;
    
`

const customStyles = {
  content : {
    top: '0',
    left: '0',
    right: '100%',
    bottom: '100%',
    width:'100%',
    height:'100%',
  }
};

export default Pages;