// 게시글
import React from 'react';
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
    if(!boardCategory){
        return <div>존재하지 않는 페이지 입니다.</div>
    }
    return(
        <div>
            <h2>{boardCategory.name}</h2>
        </div>
    )
}

export default BoardPage;