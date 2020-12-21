// 게시글
import React,{useState,useEffect} from 'react';
import {Container,Index} from '../ProductPage';
import Bottom from 'Components/Bottom';
import styled from 'styled-components';

const data={
    notice:{
        name:'NOTICE',
    },
    qna:{
        name:'Q&A',
    },
    review:{
        name:'REVIEW',
    },
}
const BoardPage =({match})=>{
    const{board} = match.params;
    const boardCategory = data[board];

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
        setBoardData(boarddata);
        if(boarddata.length!==0)
            setPaginate(Math.ceil(boarddata.length/ppp));
    },[])
    if(!boardCategory){
        return <div>존재하지 않는 페이지 입니다.</div>
    }
    return(
        <Container>
            <Title>
                
            </Title>
            <ListContainer>
                <div className="ListTitle">
                    <div className="num">
                        번호
                    </div>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center', width:'76%',padding:10}}>
                        {boardCategory.name}
                    </div>
                    <div className="user">
                        작성자
                    </div>
                    <div className="date">
                        작성일
                    </div>
                </div>
                {currentPosts(boardData).map((data)=>{
                    return(
                        <div className="List" key= {data.id}>
                            <div className="num">
                                {data.num}
                            </div>
                            <div className="title">
                                {data.title}
                            </div>
                            <div className="user">
                                {data.username}
                            </div>
                            <div className="date">
                                {data.date}
                            </div>
                        </div>
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
            <Bottom />
        </Container>
    )
}

const Title=styled.div`
    width:80%;
    height:20px;
    padding:20px;
    display:flex;
    justify-content:center;
    margin-top:15vh;
    .font{
        ${(props)=>props.theme.b_font};
    }
`
const ListContainer=styled.div`
    width:80%;
    display:flex;
    right:0px;
    flex-flow:column;
    margin-top:30px;
    .List{
        width:100%;
        height:40px;
        display:flex;
        flex-flow:row;
        ${(props)=>props.theme.s_th_font};
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

export default BoardPage;

const boarddata=[
    {
        id:1,
        num:1,
        username:'해나',
        title:'문의입니다.',
        date:'2020.12.25',
    },
     {
        id:2,
        num:2,
        username:'해냥',
        title:'문의일까요',
        date:'2020.12.31',
    },
     {
        id:3,
        num:3,
        username:'핸나',
        title:'문의문희.',
        date:'2020.12.22',
    },
     {
        id:4,
        num:4,
        username:'양꼬치',
        title:'배고프군요.',
        date:'2020.12.24',
    },
     {
        id:5,
        num:5,
        username:'문디',
        title:'문의입니다.',
        date:'2020.12.25',
    },
     {
        id:6,
        num:6,
        username:'문디',
        title:'문의입니다.',
        date:'2020.12.25',
    },
     {
        id:7,
        num:7,
        username:'문디',
        title:'문의입니다.',
        date:'2020.12.25',
    },
     {
        id:8,
        num:8,
        username:'문디',
        title:'문의입니다.',
        date:'2020.12.25',
    },
     {
        id:9,
        num:9,
        username:'문디',
        title:'문의입니다.',
        date:'2020.12.25',
    },
     {
        id:10,
        num:10,
        username:'문디',
        title:'문의입니다.',
        date:'2020.12.25',
    },
     {
        id:11,
        num:11,
        username:'문디',
        title:'문의입니다.',
        date:'2020.12.25',
    },
     {
        id:12,
        num:12,
        username:'문디',
        title:'문의입니다.',
        date:'2020.12.25',
    },
     {
        id:13,
        num:13,
        username:'문디',
        title:'문의입니다.',
        date:'2020.12.25',
    },
]