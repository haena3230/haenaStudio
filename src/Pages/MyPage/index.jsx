// mypage
import React from 'react';

const data={
    user1:{
        name:'양해나',
        description:'가나다라마바사',
    },
    user2:{
        name:'홍길동',
        description:'둘리',
    }

}

const MyPage =({match})=>{
    const {userName} = match.params;
    const profile=data[userName];
    if(!profile){
        return <div>존재하지 않는 사용자입니다.</div>
    }
    return(
        <div>
            <h1>
                <p>{profile.name}</p>
                <p>{profile.description}</p>
            </h1>

        </div>
    )
}

export default MyPage;