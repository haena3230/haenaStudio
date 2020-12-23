// 게시글
import React,{useState,useEffect} from 'react';
import {Index} from 'Pages/MainPage/ProductPage';
import styled from 'styled-components';
import Modal from 'react-modal'
import product5 from 'Assets/product5.jpg';

const Board =(props)=>{

    // board data 
    const[boardData,setBoardData]=useState([])

    // 페이지번호 세팅 
    const[currentPage,setCurrentPage]=useState(1);
    const[paginate,setPaginate]=useState(1);
    const ppp = 10;
    const indexOfLast = currentPage*ppp;
    const indexOfFirst = indexOfLast - ppp;
    function currentPosts(tmp) {
        let currentPosts = 0;
        currentPosts = tmp.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    }

    useEffect(()=>{
        setBoardData(props.boarddata);
        if(props.boarddata.length!==0)
            setPaginate(Math.ceil(props.boarddata.length/ppp));
    },[])
    return(
        <div>
            <ListContainer>
                <div className="ListTitle">
                    <div className="num">
                        NO
                    </div>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center', width:'76%',padding:10}}>
                        {props.boardname}
                    </div>
                    <div className="user">
                        NAME
                    </div>
                    <div className="date">
                        DATE
                    </div>
                </div>
                {currentPosts(boardData).map((data)=>{
                    return(
                        // 클릭시 (board)id로 detail get
                       <List 
                            id={data.id}
                            num={data.num}
                            title={data.title}
                            username={data.username}
                            date={data.date}
                       />
                    )
                })}
               
            </ListContainer>
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
                                    }
                                }>
                                    <div className="num" >{index+1}</div>
                                </button>
                            )} 
                        </div>
                        )
                    
                })} 
            </Index>
        </div>
    )
}

const List=(props)=>{
    const[set,Set]=useState(false)
    const[detail,setDetail]=useState([]);

    return(
         <button style={{all:'unset'}} onClick={async()=>{
            // 클릭시 데이터 get해오기
            await setDetail(boarddetaildata);
            Set(!set);
        }}>
            <div className="List" key= {props.id}>
                <div className="num">
                    {props.num}
                </div>
                <div className="title">
                    {props.title}
                </div>
                <div className="user">
                    {props.username}
                </div>
                <div className="date">
                    {props.date}
                </div>
            </div>
            {set?(
                <div style={{padding:20,fontSize:13}}>
                    <div>구매사이즈 - {detail.productSize}</div>
                    <div>키 - {detail.height}</div>
                    <div>몸무게 - {detail.weight}</div>
                    <div style={{marginTop:20,marginBottom:20}}>{detail.text}</div>
                    <img src={detail.image1} width='50%' alt=''/>
                </div>
            ):null}
        </button>
    )
}
const ListContainer=styled.div`
    width:100%;
    display:flex;
    right:0px;
    flex-flow:column;
    margin-top:30px;
    .List{
        width:100%;
        height:40px;
        display:flex;
        flex-flow:row;
        ${(props)=>props.theme.s_font};
        border-top:1px solid ${(props)=>props.theme.gray_1};
     
    }
    .ListTitle{
        width:100%;
        height:40px;
        display:flex;
        flex-flow:row;
        ${(props)=>props.theme.s_font};
        border-top:1px solid ${(props)=>props.theme.gray_1};
    }
    .num{
        display:flex;
        justify-content:center;
        align-items:center;
        width:8%;
        padding:10px;
    }
    .title{
        display:flex;
        justify-content:flex-start;
        align-items:center;
        width:76%;
        padding:10px;
    
    }
    .user{
        display:flex;
        justify-content:center;
        align-items:center;
        width:8%;
        padding:10px;
    }
    .date{
        display:flex;
        justify-content:center;
        align-items:center;
        width:8%;
        padding:10px;
    }
`;

export default Board;

const boarddetaildata=
    {
        id:1,
        productId:1,
        num:1,
        username:'해나',
        title:'문의입니다.',
        date:'2020.12.25',
        productSize:'Medium',
        height:'175',
        weight:'70',
        text:'색도 이쁘고 좋은데 이너로 입는게 좋겠어요',
        image1:product5,
    }
