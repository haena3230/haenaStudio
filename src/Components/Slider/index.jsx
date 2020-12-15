// 메인페이지 슬라이더

import React,{useEffect,useState,useRef} from 'react';
import styled from 'styled-components';

import background1 from 'Assets/background1.jpg';
import background2 from 'Assets/background2.jpg';
import background3 from 'Assets/background3.jpg';

const TOTAL_SLIDES=67;

const Slider=()=>{
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);
    const nextSlide = () => {
        if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 33.5);
        }
    };
    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(TOTAL_SLIDES);
            
        } else {
            setCurrentSlide(currentSlide - 33.5);
        }
    }
    useEffect(() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateY(-${currentSlide}%)`;
        
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
                    <Button onClick={prevSlide}>Previous Slide</Button>
                    <Button onClick={nextSlide}>Next Slide</Button>
                </ButtonContainer>
            </div>
        </Container>
    );
}
const Container=styled.div`
    width:100%;
    height:100vh;
    overflow:hidden;
`

const Button=styled.button`
    all:unset;
    width:100px;
    border:2px solid coral;
    color:coral;
    border-radius:10px;
    padding:10px;
    display:flex;
    justify-content:center;
    &:hover{
        transition:all 0.3s ease-in-out;
        background-color:coral;
        color:#fff;
    }
`
const ButtonContainer=styled.div`
    margin:10px;
    position:absolute;
    right:20px;
    bottom:20px;
    display:flex;
    flex-direction:column;
`
const SliderContainer = styled.div`
  width: 100%;  
`;

// 내부 이미지
const Slide =({img})=>{
    return(
        <IMG src={img} alt=''/>
    )
}

const IMG = styled.img`
    width:100%;
    heigth:100%;
`

export default Slider;