const size={
    mobile:"770px",
    tabletS:"1023px",
    tabletM:"1220px",
    tabletL:"1280px",
    laptop:"1460px",
    desktop:"1700px",
};


const theme={
    black:"#000000",
    gray_1:"#9A9A9A",
    gray_2:'#EEEEEE',
    blue_1:"#263A6C",
    b_font:{
        fontSize:18,
    },
    m_font:{
        fontSize:15,
    },
    s_font:{
        fontSize:13,
    },
    ss_font:{
        fontSize:10,
    },
    
    mobile:`(max-width:${size.mobile})`,
    tabletS:`(max-width:${size.tabletS})`,
    tabletM:`(max-width:${size.tabletM})`,
    tabletL:`(max-width:${size.tabletL})`,
    laptop:`(max-width:${size.laptop})`,
    desktop:`(max-width:${size.desktop})`,

}

export default theme;