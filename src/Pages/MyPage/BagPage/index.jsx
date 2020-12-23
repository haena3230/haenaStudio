// 장바구니 페이지
import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {Container,PageContainer} from 'Pages/MainPage/ProductPage';
import Bottom from 'Components/Bottom';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from 'Components/Button';

import product1 from 'Assets/product.jpg';
import product2 from 'Assets/product2.jpg';
import product3 from 'Assets/product3.jpg';
import product4 from 'Assets/product4.jpg';
import product5 from 'Assets/product5.jpg';

// userId, postId로 상품 플러스마이너스 post하면 바뀐 정보
// 두번째 post에서는 totalcount, totalPrice, shippingPrice get 해서 바꾸기
const BagPage=()=>{
    const[bagdata,setBagdata]=useState([]);
    const[total,setTotal]=useState([]);
    useEffect(()=>{
        setBagdata(test)
        setTotal(testSecond);
    },[])
    return(
        <PageContainer>
        <Container>
            <Title>
                장바구니({total.totalCount})
            </Title>
            <SubTitle>
                <div className="product">상품정보</div>
                <div className="info">수량</div>
                <div className="info">가격</div>
            </SubTitle>
    
            <ListContainer>
                <div className="listbox" >
            {bagdata.map((data)=>{
                return(
                    <div className="list"  key={data.id}>
                        <div className="img">
                            <img src={data.image} width='100%' alt=''/>
                        </div>
                        <div className="product">
                            <div className="productl">
                                {data.productName}
                            </div>
                            <div className="productl">
                                SIZE: {data.size}
                            </div>
                            <div className="priductbtn">
                                삭제하기
                            </div>
                        </div>
                        <div className="info">
                            <div>
                                <Count onClickPlus={()=>alert('APIpost')} onClickMinus={()=>alert('APIpost')} count={data.itemcount} />
                            </div>
                        </div>
                        <div className="info">{data.price}원</div>
                    </div>
                )
            })}
                </div>
        </ListContainer>
        <TotalContainer>
            <div className="box">
                <div className="lista">
                    <div className="listIn">상품 합계</div>
                    <div className="listIn">{total.totalItemPrice}원</div>
                </div>
                
                <div className="listb">
                    <div className="listIn">배송비</div>
                    <div className="listIn">{total.shippingPrice}원</div>
                </div>
                
                <div className="listc">
                    <div className="listIn">합계</div>
                    <div className="listIn">{total.totalPrice}원</div>
                </div>
            </div>
        </TotalContainer>
        <div style={{display:'flex', justifyContent:'flex-end', width:'85%'}}>
            <Button text="주문하기" onClick={()=>{alert('준비중')}}/>
        </div>
    </Container>
    <Bottom />
    </PageContainer>
    )
}

const Count=(props)=>{
    return(
        <CountContainer>
            <button className="lbox" onClick={props.onClickMinus}>
                <RemoveIcon style={{ fontSize: 15}} color="disabled"/>
            </button>
            <div className="cbox">
                {props.count}
            </div>
            <button className="rbox" onClick={props.onClickPlus}>
                <AddIcon style={{ fontSize: 15}} color="disabled"/>
            </button>
        </CountContainer>
    )
}



const Title =styled.div`
    margin-top:20vh;
    width:85%;
    ${(props)=>props.theme.b_font}
`
const SubTitle=styled.div`
    margin-top:10vh;
    padding-bottom:10px;
    width:85%;
    display:flex;
    flex-flow:row;
    ${(props)=>props.theme.m_font};
    border-bottom:1px solid ${(props)=>props.theme.gray_1};
    .product{
        width:75%;
    }
    .info{
        display:flex;
        justify-content:center;
        width:15%;
    }
`
const ListContainer=styled.div`
    width:85%;
    display:flex;
    ${(props)=>props.theme.s_font};
    .listbox{
        width:100%;
        display:flex;
        flex-flow:column;
    }
    .list{
        width:100%;
        display:flex;
        flex-flow:row;
        padding-top:10px;
        padding-bottom:10px;
        border-bottom:1px solid ${(props)=>props.theme.gray_1};
    }
    .product{
        width:60%;
        display:flex;
        flex-flow:column;
        justify-content:center;
        padding-left:20px;
    }
    .img{
        width:10%;
    }
    .productl{
        padding:5px;   
    }
    .priductbtn{
        padding:5px;   
        color:${(props)=>props.theme.gray_1};
    }
    .info{
        width:15%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
`
const TotalContainer=styled.div`
    width:85%;
    display:flex;
    justify-content:flex-end;  
    .box{
        width:50%;
        display:flex;
        justify-content:flex-end;
        flex-flow:column;
        ${(props)=>props.theme.m_font};
    }
    .lista{
        display:flex;
        flex-flow:row;
        padding-top:10px;
        padding-bottom:10px;
    }
    .listb{
        display:flex;
        flex-flow:row;
        border-bottom:1px solid ${(props)=>props.theme.gray_1};
        padding-top:10px;
        padding-bottom:10px;
    }
     .listc{
        display:flex;
        flex-flow:row;
        font-weight:bold;
        padding-top:10px;
        padding-bottom:10px;
    }
    .listIn{
        width:50%;
        display:flex;
        justify-content:flex-end;
    }
`

const CountContainer=styled.div`
    width:100px;
    height:25px;
    display:flex;
    flex-flow:row;
    ${(props)=>props.theme.s_font};
    border:1px solid ${(props)=>props.theme.gray_1};
    .cbox{
        display:flex;
        justify-content:center;
        align-items:center;
        width:33%;
    }
    .lbox{
        all:unset;
        display:flex;
        justify-content:center;
        align-items:center;
        width:33%;
        border-right:1px solid ${(props)=>props.theme.gray_1};
    }
    .rbox{
        all:unset;
        display:flex;
        justify-content:center;
        align-items:center;
        width:33%;
        border-left:1px solid ${(props)=>props.theme.gray_1};
    }
`

export default BagPage;

const testSecond={
    totalCount:10,
    totalItemPrice:'30,000',
    shippingPrice:'0',
    totalPrice:'30,000',
}

const test=[
    {id:1, productName:'Woo; Maxi Pants', image:product1, price:'20,000', itemcount:1,size:'Large'},
    {id:2, productName:'item2', image:product2, price:'30,000',itemcount:1,size:'Large'},
    {id:3, productName:'item3', image:product3, price:'20,000',itemcount:1,size:'Large'},
    {id:4, productName:'item4', image:product4, price:'50,000',itemcount:1,size:'Large'},
    {id:5, productName:'item5', image:product5, price:'70,000',itemcount:1,size:'Large'},
    {id:6, productName:'item6', image:product1, price:'10,000',itemcount:1,size:'Large'},
    {id:7, productName:'item7', image:product2, price:'10,000',itemcount:1,size:'Large'},
    {id:8, productName:'item8', image:product3, price:'30,000',itemcount:1,size:'Large'},
    {id:9, productName:'item9', image:product4, price:'20,000',itemcount:1,size:'Large'},
    {id:10, productName:'item10', image:product5, price:'20,000',itemcount:1,size:'Large'},
]