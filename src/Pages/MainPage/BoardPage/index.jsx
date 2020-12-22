// 게시글
import React from 'react';
import {Container} from '../ProductPage';
import Bottom from 'Components/Bottom';
import Board from 'Components/Board';
import ButtonCom from 'Components/Button';

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

    return(
        <Container>
            <div style={{width:'80%',marginTop:'17vh'}}>
                <Board boardname={boardCategory.name} boarddata={boarddata}/>
            </div>
            {boardCategory.name==='Q&A'?(
               <ButtonCom text={'작성하기'} onClick={()=>alert('test')}/>
            ):null}
            <Bottom />
        </Container>
    )
}

export default BoardPage;
// qa를 productId 0 줄까
const boarddata=[
    {
        id:1,
        productId:1,
        num:1,
        username:'해나',
        title:'문의입니다.',
        date:'2020.12.25',
    },
     {
        id:2,
        productId:1,
        num:2,
        username:'해냥',
        title:'문의일까요',
        date:'2020.12.31',
    },
     {
        id:3,
        productId:1,
        num:3,
        username:'핸나',
        title:'문의문희.',
        date:'2020.12.22',
    },
     {
        id:4,
        productId:1,
        num:4,
        username:'양꼬치',
        title:'배고프군요.',
        date:'2020.12.24',
    },
     {
        id:5,
        productId:1,
        num:5,
        username:'문디',
        title:'문의입니다.',
        date:'2020.12.25',
    },
     {
        id:6,
        productId:1,
        num:6,
        username:'문디',
        title:'문의입니다.',
        date:'2020.12.25',
    },
     {
        id:7,
        productId:1,
        num:7,
        username:'문디',
        title:'문의입니다.',
        date:'2020.12.25',
    },
     {
        id:8,
        productId:1,
        num:8,
        username:'문디',
        title:'문의입니다.',
        date:'2020.12.25',
    },
     {
        id:9,
        productId:1,
        num:9,
        username:'문디',
        title:'문의입니다.',
        date:'2020.12.25',
    },
     {
        id:10,
        productId:1,
        num:10,
        username:'문디',
        title:'문의입니다.',
        date:'2020.12.25',
    },
     {
        id:11,
        productId:1,
        num:11,
        username:'문디',
        title:'문의입니다.',
        date:'2020.12.25',
    },
     {
        id:12,
        productId:1,
        num:12,
        username:'문디',
        title:'문의입니다.',
        date:'2020.12.25',
    },
     {
        id:13,
        productId:1,
        num:13,
        username:'문디',
        title:'문의입니다.',
        date:'2020.12.25',
    },
]