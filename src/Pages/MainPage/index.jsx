// mainpage
import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'Components/Slider';
import background1 from 'Assets/background1.jpg';

const StyledLink = styled(Link)`
    text-decoration:none;
    color:black;
    &:focus, &:hover, &:visited, &link, &:active{
        text-decoration:none;
    }
`

const Font=styled.div`
    .left{
        font-size:25px;
        font-weight:bold;
        margin-top:10px;
    }
    .right{
        font-size:15px;
        font-weight:bold;
        margin-left:30px;
    }
`
const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: 
    url(${background1});
  background-size: cover;
  background-position:center;
`;
const MainPage = ()=>{
    return(
        <Container>
            <Slider />
            
            <div style={{fontSize:40,fontWeight:'bold',marginLeft:40,position:'fixed',top:50}}>
                <StyledLink to ="/">Studio Haena</StyledLink>
            </div>
            {/* 왼쪽 메뉴 */}
            <div style={{marginLeft:40, position:'fixed',top:150}}>
                <Font>
                    <div className="left">SHOP</div>
                </Font>
                <div style={{marginTop:30}}>
                    <Font>
                        <div className="left">NEW ARRIVALS</div>
                    </Font>
                    <Font>
                        <div className="left">OUT WEARS</div>
                    </Font>
                    <Font>
                        <div className="left">TOP</div>
                    </Font>
                    <Font>
                        <div className="left">BOTTOM</div>
                    </Font>
                    <Font>
                        <div className="left">ACC</div>
                    </Font>
                </div>
                <Font>
                    <div className="left">SALE</div>
                </Font>
                <div style={{marginTop:30}}>
                    <Font>
                        <div className="left">NOTICE</div>
                    </Font>
                    <Font>
                        <div className="left">Q&A</div>
                    </Font>
                    <Font>
                        <div className="left">REVIEW</div>
                    </Font>
                </div>
                {/* 상단 메뉴 */}
                <div style={{display:'flex',position:'fixed',right:50,top:70}}>
                    <Font>
                        <div  className="right">
                            <StyledLink to ="/login">LOGIN</StyledLink>
                        </div>
                    </Font>
                    <Font>
                        <div className="right">
                            <StyledLink to ="/profile/user1">REGISTER</StyledLink>
                        </div>
                    </Font>
                     <Font >
                         <div className="right">
                            <StyledLink to ="/profile/user1">BAG</StyledLink>
                        </div>
                    </Font>
                     <Font>
                         <div className="right">
                            SEARCH
                         </div>
                    </Font>
                </div>
                
            </div>
        </Container>
    );
}

export default MainPage;