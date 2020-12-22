import React,{useState} from 'react'
import styled from 'styled-components';
import {Container, Title} from 'Pages/MainPage/ProductPage';
import Bottom from 'Components/Bottom';
import ButtonCom from 'Components/Button';

const RegisterPage=()=>{
    const[id,setId]=useState('');
    const[pass,setPass]=useState('');
    const[passCon,setPassCon]=useState('');
    const[name,setName]=useState('');
    const[phone,setPhone]=useState('');
    const[email,setEmail]=useState('');

    return(

        <Container>
            <Title>
                회원가입
            </Title>
            <Box>
                <div className="List">
                    <div className="title">아이디</div>
                    <input className="input" type ="text" placeholder ="ID" onChange ={
                        function onChange(event) {
                            setId(event.target.value);}
                        } size={50} />
                </div>
                <div className="List">
                    <div className="title">비밀번호</div>
                    <input className="input" type ="text" placeholder ="PASSWARD" onChange ={
                        function onChange(event) {
                            setPass(event.target.value);}
                        } size={50} />
                </div>
                <div className="List">
                    <div className="title">비밀번호 확인</div>
                    <input className="input" type ="text" placeholder ="CONFIRM" onChange ={
                        function onChange(event) {
                            setPassCon(event.target.value);}
                        } size={50} />
                </div>
                <div className="List">
                    <div className="title">이름</div>
                    <input className="input" type ="text" placeholder ="NAME" onChange ={
                        function onChange(event) {
                            setName(event.target.value);}
                        } size={50} />
                </div>
                <div className="List">
                    <div className="title">휴대전화</div>
                    <input className="input" type ="text" placeholder ="PHONE" onChange ={
                        function onChange(event) {
                            setPhone(event.target.value);}
                        } size={50} />
                </div>
                <div className="List">
                    <div className="title">이메일</div>
                    <input className="input" type ="text" placeholder ="EMAIL" onChange ={
                        function onChange(event) {
                            setEmail(event.target.value);}
                        } size={50} />
                </div>
            </Box>
            <Market>
                    여기는 마케팅 수신 정보 들어갈곳 뭔가 법적으로 규제가 있으니 꼼꼼히 확인해보고 조항 만들어야할듯
            </Market>
            <ButtonCom text={'가입하기'} onClick={()=>alert('준비중')}/>
            <Bottom />
        </Container>
    )
}
const Box = styled.div`
    width:70%;
    display:flex;
    flex-flow:column;
    border-top:1px solid ${(props)=>props.theme.gray_1};
    margin-top:60px;
    .List{
        display:flex;
        flex-flow:row;
        border-bottom:1px solid ${(props)=>props.theme.gray_1};
    }
    .title{
        padding:10px;
        width:20%;
        ${(props)=>props.theme.s_font};
    }
    .input{
        width:30%;
        border:none;
        ${(props)=>props.theme.s_font};
    }
`
const Market=styled.div`
    border:1px solid ${(props)=>props.theme.gray_1};
    margin-top:30px;
`
const Btn=styled.button`
    all:unset;
    background-color:${(props)=>props.theme.gray_1};
    ${(props)=>props.theme.s_font};
    color:white;
    padding:5px;
    border-radius:3px;
    margin-top:30px;
`

export default RegisterPage;