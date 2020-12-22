// loginPage
import React,{useState} from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import {StyledLink} from '../index';


const LoginPage =()=>{
    const[id,setId]=useState('');
    const[pass,setPass]=useState('');
    return(
        <Container>
            <Exit>
                <button style={{all:'unset'}} onClick={()=>{
                    window.history.back()
                }}>
                    <CloseIcon style={{ fontSize: 40 }} color="disabled"/>
                </button>
            </Exit>
            <input className="input" type ="text" placeholder ="ID" onChange ={
                function onChange(event) {
                    setId(event.target.value);}
                } size={50} />
            <input className="input" type ="text" placeholder ="PASSWORD" onChange ={
                function onChange(event) {
                    setPass(event.target.value);}
                } size={50} />
            <LoginBox>
                <button style={{all:'unset',width:'100%'}} onClick={()=>{
                        alert('준비중')
                    }}>
                    <Login>
                        <div className="loginIn">
                            LOG IN
                        </div>
                    </Login>
                </button>
                 <button style={{all:'unset',width:'100%'}} onClick={()=>{
                    alert('준비중')
                    }}>
                    <Join className="login">
                        <div className="joinIn">JOIN US</div>
                    </Join>
                </button>
            </LoginBox>
            <Forget>
                <div className="inLeft">FORGET ID</div>
                <div className="inRight">FORGET PASSWARD</div>
            </Forget>
            <LoginBox>
                <button style={{all:'unset',width:'100%'}} onClick={()=>{
                        alert('준비중')
                    }}>
                    <Join>
                        <div className="joinIn">
                            네이버로그인
                        </div>
                    </Join>
                </button>
            </LoginBox>
            
        </Container>
    )
}
const Exit=styled.div`
    display:flex;
    position:fixed;
    width:50px;
    height:50px;
    top:100px;
    right:100px;
`

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    flex-flow:column;
    position:fixed;
    top:30vh;
    .input{
        width:30%;
        padding-top:10px;
        padding-bottom:10px;
        border:none;
        border-bottom:1px solid ${(props)=>props.theme.gray_1};
    }
`

const LoginBox=styled.div`
    display:flex;
    flex-flow:column;
    width:30%;
    margin-top:50px;
    margin-bottom:50px;
`
const LoginContain=styled.div`
    all:unset;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding-top:10px;
    padding-bottom:10px;
`
const Login=styled(LoginContain)`
    background-color:${(props)=>props.theme.gray_1};
    border:1px solid ${(props)=>props.theme.m_font};;
    .loginIn{
        ${(props)=>props.theme.m_font};
        color:white;
    }
`
const Join = styled(LoginContain)`
    background-color:white;
    border:1px solid ${(props)=>props.theme.gray_1};
    .joinIn{
         ${(props)=>props.theme.m_font};
        color:black;
    }
`

const Forget=styled.div`
    display:flex;
    flex-flow:row;
    width:30%;
    justify-content:center;
    ${(props)=>props.theme.s_font};
    .inLeft{
        padding-right:10px;
        border-right:1px solid ${(props)=>props.theme.gray_1};
    }
    .inRight{
        padding-left:10px;
    }
`
export default LoginPage;