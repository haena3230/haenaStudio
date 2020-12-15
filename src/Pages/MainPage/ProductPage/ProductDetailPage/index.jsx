// 상품 정보 페이지
import React from 'react';
const data={
    item1:{
        name:'ITEM1',
    },
    item2:{
        name:'ITEM2',
    },
    item3:{
        name:'ITEM3',
    },
}
const ProductDetailPage=({match})=>{
    const {item}=match.params;
    const pickedItem=data[item];
    if(!pickedItem){
        return <div>존재하지 않는 페이지 입니다.</div>
    }
    return(
        <div>test</div>
    );
}

export default ProductDetailPage;