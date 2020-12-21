// 상품 정보 페이지
import React,{useState,useEffect} from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// 아이콘
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';

import product1 from 'Assets/product.jpg';
import product2 from 'Assets/product2.jpg';
import product3 from 'Assets/product3.jpg';
import product4 from 'Assets/product4.jpg';
import product5 from 'Assets/product5.jpg';

const ProductDetailPage=({match})=>{
    // 이걸로 api get 
    let {productId} =match.params;
    // data
    const [detail,setDetail]=useState([])
    // 사이즈 버튼
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const[size,setSize]=useState('사이즈 선택(필수)');
    useEffect(()=>{
        setDetail(detailData)
    },[])
    // 설명
    const[des,setDes]=useState(false);
    const[sizeDes,setSizeDes]=useState(false);
    // 선택시
    const[count,setCount]=useState(0);
    return(
        <Container>
            <Left>
                <div className="image">
                  <img src={detail.image1} width='100%' alt=''/>
                </div>
                <div className="image">
                  <img src={detail.image2} width='100%' alt=''/>
                </div>
                <div className="image">
                  <img src={detail.image3} width='100%' alt=''/>
                </div>
                <div className="image">
                  <img src={detail.image4} width='100%' alt=''/>
                </div>
                <div className="image">
                  <img src={detail.image5} width='100%' alt=''/>
                </div>
            </Left>
            <Right>
                <div className="productName">
                        {detail.productName}
                </div>
                <div className="price">
                    <div>{detail.price}</div>
                    <div>{detail.sale} (5%)적립</div>
                </div>
                <div className="size">
                    <div>Size</div>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <div className="price">{size}</div>
                        <ArrowDropDownIcon />
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                    <MenuItem onClick={()=>{
                        setSize('Small');
                        setCount(1)
                        handleClose()
                    }}>SMALL</MenuItem>
                    <MenuItem onClick={()=>{
                        setSize('Medium')
                        setCount(1)
                        handleClose()
                    }}>MEDIUM</MenuItem>
                    <MenuItem onClick={()=>{
                        setSize('Large')
                        setCount(1)
                        handleClose()
                    }}>LARGE</MenuItem>
                    </Menu>

                </div>
                {size==='사이즈 선택(필수)'?(
                    null
                ):(
                    <AddItem 
                    productName={detail.productName} 
                    size={size} 
                    num={count} 
                    onClickPlus={()=>{
                        setCount(count+1)
                    }}
                    onClickMinus={()=>{
                        if(count>1)
                            setCount(count-1)
                    }}
                    onClickExit={()=>{
                        setSize('사이즈 선택(필수)')
                        setCount(0);
                    }}
                    totalPrice={detail.price*count}
                    sale={detail.sale*count}
                    />
                )}
                
                <div className="des">
                    <button style={{all:'unset'}} onClick={()=>{
                        setDes(!des);
                        if(sizeDes===true)
                        setSizeDes(false);
                    }}>
                        <div className="sideBtnBar">
                            <div>description</div>
                            {des?(
                                <ArrowDropUpIcon />
                            ):(<ArrowDropDownIcon />)}
                        </div>
                    </button>
                    {des?(
                        <div style={{marginTop:10}}>
                            {detail.description}
                        </div>
                    ):null}
                </div>
                <div className="des">
                    <button style={{all:'unset'}} onClick={()=>{
                        setSizeDes(!sizeDes);
                        if(des===true)
                        setDes(false);
                    }}>
                        <div className="sideBtnBar">
                            <div>size detail</div>
                            {sizeDes?(
                                <ArrowDropUpIcon />
                            ):(<ArrowDropDownIcon />)}
                        </div>
                    </button>
                    {sizeDes?(
                        <div style={{marginTop:10}}>
                            여기는 사이즈 표가 나올 공간 
                        </div>
                    ):null}
                </div>
                <div>

                </div>
                <div className="total">
                        TOTAL : {detail.price*count}
                </div>
                <RightBottom>
                    <div>
                        BUY NOW
                    </div>
                    <div>
                        BAG
                    </div>
                </RightBottom>
            </Right>
            
        </Container>
    );
}

const AddItem=(props)=>{
    return(
        <PlusStyle>
            <div className="two">
                <div>
                    - {props.productName}
                </div>
                <div>
                    - {props.size}
                </div>
            </div>
            <div className="one">
                <div className="num">{props.num}</div>
                <button style={{all:'unset'}} onClick={props.onClickPlus}>
                    <AddIcon style={{ fontSize: 15}} color="disabled"/>
                </button>
                <button style={{all:'unset'}} onClick={props.onClickMinus}>
                    <RemoveIcon style={{ fontSize: 15 }} color="disabled"/>
                </button>
            </div>
            <div className="two">
                <div>
                    {props.totalPrice}
                </div>
                <div>
                    {props.sale}(적립)
                </div>
            </div>
            <div className="one">
                <button style={{all:'unset'}} onClick={props.onClickExit}>
                    <CancelPresentationIcon style={{ fontSize: 20 }} color="disabled"/>
                </button>
            </div>
        </PlusStyle>
    )
}
const Container=styled.div`
    width:77%;
    height:100%;
    display:flex;
    flex-flow:row;
    align-items:center;
    position:absolute;
    right:3vw;
    bottom:0;
`
const Left=styled.div`
    width:60%;
    height:100%;
    margin-top:7vh;
    display:flex;
    flex-flow:column;
    .image{
        width:100%;
        padding-top:50px;
    }
`
const Right=styled.div`
    width:30%;
    height:75%;
    display:flex;
    position:fixed;
    flex-flow:column;
    right:20px;
    bottom:20px;
    .productName{
        ${(props)=>props.theme.s_th_font};
        margin-bottom:10px;
    }
    .price{
        display:flex;
        flex-flow:column;
        ${(props)=>props.theme.s_th_font};
    }
    .size{
        display:flex;
        flex-flow:row;
        justify-content:space-between;
        align-items:center;
        padding-top:10px;
        padding-bottom:10px;
        border-bottom:1px solid ${(props)=>props.theme.gray_2};
        ${(props)=>props.theme.s_th_font};
    }
    .sideBtnBar{
        display:flex;
        flex-flow:row;
        justify-content:space-between;
        align-items:center;
        
    }
    .des{
        display:flex;
        flex-flow:column;
        ${(props)=>props.theme.s_th_font};
        border-bottom:1px solid ${(props)=>props.theme.gray_2};
        padding-top:10px;
        padding-bottom:10px;
    }
    .total{
         ${(props)=>props.theme.s_th_font};
         padding-top:10px;
    }
`
const RightBottom=styled.div`
    width:30%;
    display:flex;
    position:fixed;
    flex-flow:row;
    justify-content:space-around;
    bottom:40px;
`
const PlusStyle=styled.div`
    display:flex;
    padding:5px;
    flex-flow:row;
    justify-content:space-between;
    border:1px solid ${(props)=>props.theme.gray_2};
    align-items:center;
    ${(props)=>props.theme.s_th_font};
    .two{
        display:flex;
        flex-flow:column;
        align-items:flex-start;
    }
    .one{
        display:flex;
        flex-flow:row;
        align-items:center;
        justify-content:center;
        padding:10px;
    }
    .num{
        border:1px solid ${(props)=>props.theme.gray_2};
        padding:3px;
    }
`

export default ProductDetailPage;


const detailData=
    {
        id:1, 
        productName:'jp0303 캡틴 몬스터 파카 -블랙', 
        image1:product1,
        image2:product2,
        image3:product3,
        image4:product4,
        image5:product5,
        price:20000,
        sale:1000,
        size:'medium',
        description:'흐르는 듯한 자연스러운 실루엣의 오리털 패딩 입니다.'
    }// 사진 최대 열개