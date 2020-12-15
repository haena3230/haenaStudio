// 상품 페이지
import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import product1 from 'Assets/product.jpg';
import product2 from 'Assets/product2.jpg';
import product3 from 'Assets/product3.jpg';
import product4 from 'Assets/product4.jpg';
import product5 from 'Assets/product5.jpg';

const data={
    new_arrivals:{
        name:'NEW ARRIVALS',
    },
    out_wears:{
        name:'OUT WEARS',
    },
    top:{
        name:'TOP',
    },
    bottom:{
        name:'BOTTOM',
    },
    acc:{
        name:'ACC',
    },
    sale:{
        name:'SALE',
    }
}


const ProductPage =({match})=>{
    const{category} = match.params;
    const productCategory = data[category];
    const[itemList,setItemList]=useState(['']);

    // 페이지번호 세팅 
    const[currentPage,setCurrentPage]=useState(1);
    const[paginate,setPaginate]=useState(1);
    const ppp = 6;
    const indexOfLast = currentPage*ppp;
    const indexOfFirst = indexOfLast - ppp;
    function currentPosts(tmp) {
        let currentPosts = 0;
        currentPosts = tmp.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    }
    useEffect(()=>{
        setItemList(test);
        if(test.length!==0)
            setPaginate(Math.ceil(test.length/ppp));
    },[])

    if(!productCategory){
        return <div>존재하지 않는 페이지 입니다.</div>
    }
    return(
        <div>
           
            <Container>
                <Title>
                     <div className="font">{productCategory.name}</div>
                </Title>
                <Bar>
                    <div className="font">Total : {itemList.length} Items</div>
                    <div className="sorting">
                        <Sorting>
                            <div className={"font"}>New</div>
                        </Sorting>
                        <Sorting>
                            <div className={"font"}>Best</div>
                        </Sorting>
                        <Sorting>
                            <div className={"font"}>LowPrice</div>
                        </Sorting>
                        <Sorting>
                            <div className={"font"}>HighPrice</div>
                        </Sorting>
                        <Sorting>
                            <div className={"font"}>Review</div>
                        </Sorting>
                    </div>
                </Bar>
                <ItemContainer>
                    {currentPosts(itemList).map((itemlist)=>{
                        return(
                            
                                <div className={"item"} key ={itemlist.id}>
                                    <img src={itemlist.image} width='100%' alt=''/>
                                    <div className={"info"}>
                                        <div>{itemlist.productName}</div>
                                        <div>{itemlist.price} won</div>
                                    </div>
                                </div>
                            
                        )
                    })}
                </ItemContainer>
                <Index>
                    {[...Array(paginate)].map((n,index)=>{
                        return(
                            <div>
                                {currentPage===index+1?(
                                    <div className="numPicked">{index+1}</div>
                                ):(
                                    <button style={{ all:'unset'}} onClick={
                                        ()=>{
                                            setCurrentPage(index+1);
                                            window.scrollTo(0, 0);
                                        }
                                    }>
                                        <div className="num" >{index+1}</div>
                                    </button>
                                )} 
                            </div>
                            )
                        
                    })} 
                </Index>
                <Bottom>
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

                </Bottom>
            </Container>
        </div>
    )
}

const Container = styled.div`
    width:85%;
    height:100%;
    display:flex;
    flex-flow:column;
    align-items:center;
    position:absolute;
    right:3vw;
    bottom:0;
`
const Title=styled.div`
    width:90%;
    height:20px;
    padding:20px;
    display:flex;
    justify-content:center;
    margin-top:15vh;
    .font{
        ${(props)=>props.theme.b_font};
    }
`
const Bar = styled.div`
    
    height:20px;
    width:90%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:10px;
    border:1px solid gray;
    .font{
        ${(props)=>props.theme.s_font};
    }
    .sorting{
        display:flex;
    }
`
const Sorting =styled.button`
    all:unset;
    color:black;
    padding:10px;
    display:flex;
    justify-content:center;
    &:hover{
        transition:all 0.3s ease-in-out;
        background-color:gray;
        color:#fff;
    }
    .font{
        ${(props)=>props.theme.s_font};
    }
`
const ItemContainer=styled.div`
    width:100%;
    display:flex;
    flex-flow:row wrap; 
    justify-content:flex-start;
    padding-left:3%;
    .item{
        diplay:flex;
        justify-content:center;
        width:26%;
        padding:3%;
    }    
    .info{
        display:flex;
        flex-flow:column;
        align-items: center;
        justify-content: center;
        ${(props)=>props.theme.s_font};

    }
`
const Index=styled.div`
    width:100%;
    padding:5% 0 5% 0;
    display:flex;
    align-items: center;
    justify-content: center;
    .num{
        ${(props)=>props.theme.m_th_font};
        padding:5px;
        &:hover{
            cursor:pointer;
            border-bottom:1px solid black;
        }
    }
    .numPicked{
        color:white;
        background-color:#263A6C;
        padding:5px;
        }
    }
`

const Bottom=styled.div`
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
export default ProductPage;

const test=[
    {id:1, productName:'item1', image:product1, price:'20,000'},
    {id:2, productName:'item2', image:product2, price:'30,000'},
    {id:3, productName:'item3', image:product3, price:'20,000'},
    {id:4, productName:'item4', image:product4, price:'50,000'},
    {id:5, productName:'item5', image:product5, price:'70,000'},
    {id:6, productName:'item6', image:product1, price:'10,000'},
    {id:7, productName:'item7', image:product2, price:'10,000'},
    {id:8, productName:'item8', image:product3, price:'30,000'},
    {id:9, productName:'item9', image:product4, price:'20,000'},
    {id:10, productName:'item10', image:product5, price:'20,000'},
]