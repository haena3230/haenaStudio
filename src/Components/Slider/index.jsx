// 메인페이지 슬라이더

import React,{useEffect,useState,useRef} from 'react';
import styled from 'styled-components';

import background1 from 'Assets/background1.jpg';
import background2 from 'Assets/background2.jpg';
import background3 from 'Assets/background3.jpg';

const Slider=()=>{
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);
    const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
        } else {
      setCurrentSlide(currentSlide + 1);
        }
    };
    const prevSlide = () => {
    if (currentSlide === 0) {
        setCurrentSlide(TOTAL_SLIDES);
        } else {
        setCurrentSlide(currentSlide - 1);
        }
    }
    useEffect(() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
    }, [currentSlide]);
    return (
        <Container>
        {currentSlide}
        <SliderContainer ref={slideRef}>
            <Slide img={background1} />
            <Slide img={background2} />
            <Slide img={background3} />
        </SliderContainer>
        <Button onClick={prevSlide}>Previous Slide</Button>
        <Button onClick={nextSlide}>Next Slide</Button>
        </Container>
    );
}
const Container=styled.div`
    width:60%;
    overflow:hidden;
`

const Button=styled.button`
    all:unset;
    border:1px solid coral;
    padding:0.5em 2em;
    color:coral;
    border-radius:10px;
    &:hover{
        transition:all 0.3s ease-in-out;
        background-color:coral;
        color:#fff;
    }
`
const SliderContainer = styled.div`
  width: 100%;
  display: flex; 
`;
const TOTAL_SLIDES=2;

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