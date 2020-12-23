// 메인페이지 슬라이더

import React,{useEffect,useState,useRef} from 'react';
import styled from 'styled-components';

import background2 from 'Assets/background1.jpg';
import background1 from 'Assets/background2.jpg';
import background3 from 'Assets/background3.jpg';


const Slider=()=>{
    const [currentSlide, setCurrentSlide] = useState(33.5);
    const slideRef = useRef(null);
    const FirstSlide = () => {
        setCurrentSlide(0);
    };
    const SecondSlide = () => {
        setCurrentSlide(33.5);
    }
    const ThirdSlide = () => {
        setCurrentSlide(67);
    }
    // 선택했는가
    const [isOne,setIsOne]=useState(false);

    useEffect(() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateY(-${currentSlide}%)`;
        setTimeout(function time(){
            if(currentSlide===67) setCurrentSlide(0)
            else setCurrentSlide(currentSlide+33.5)
        }, 5000); 
    }, [currentSlide]);
    return (
        <Container>
            <div style={{display:'flex'}}>
                <SliderContainer ref={slideRef}>
                    <Slide img={background1} />
                    <Slide img={background2} />
                    <Slide img={background3} />
                </SliderContainer>
                <ButtonContainer>
                    {currentSlide===0?(
                        <div>
                            <ButtonPicked onClick={FirstSlide} > <div></div></ButtonPicked>
                            <Button onClick={SecondSlide} > <div></div></Button>
                            <Button onClick={ThirdSlide} > <div></div></Button>
                        </div>
                    ):(
                        currentSlide===33.5?(
                            <div>
                                <Button onClick={FirstSlide} > <div></div></Button>
                                <ButtonPicked onClick={SecondSlide} > <div></div></ButtonPicked>
                                <Button onClick={ThirdSlide} > <div></div></Button>
                            </div>
                        ):(
                            <div>
                                <Button onClick={FirstSlide} > <div></div></Button>
                                <Button onClick={SecondSlide} > <div></div></Button>
                                <ButtonPicked onClick={ThirdSlide} > <div></div></ButtonPicked>
                            </div>
                        )
                    )}
                </ButtonContainer>
            </div>
        </Container>
    );
}


// 내부 이미지
const Slide =({img})=>{
    return(
        <IMG src={img} alt=''/>
    )
}

const Container=styled.div`
    width:100%;
    height:100vh;
    overflow:hidden;
`

const Button=styled.button`
    all:unset;
    width:20px;
    height:5px;
    margin:10px;
    display:flex;
    justify-content:center;
    background-color:${(props)=>props.theme.gray_1};
    opacity: 0.5;
    border-radius:10px;
`
const ButtonPicked=styled.div`
    all:unset;
    width:30px;
    height:8px;
    margin:10px;
    display:flex;
    justify-content:center;
    background-color:#111111;
    opacity: 0.85;
    border-radius:10px;
`
const ButtonContainer=styled.div`
    margin:10px;
    position:absolute;
    right:20px;
    bottom:45vh;
    display:flex;
    flex-direction:column;
`
const SliderContainer = styled.div`
  width: 100%;  
`

const IMG = styled.img`
    width:100%;
    heigth:100%;
`

export default Slider;