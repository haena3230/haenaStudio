const size={
    mobile:"770px",
    tabletS:"1023px",
    tabletM:"1220px",
    tabletL:"1280px",
    laptop:"1460px",
    desktop:"1700px",
};


const theme={
    b_color:"000000",
    g_color:"9F9F9F",
    b_font:{
        fontWeight:'bold',
        fontSize:20,
    },
    m_font:{
        fontWeight:'bold',
        fontSize:15,
    },
    m_th_font:{
        fontSize:15,
    },
    s_font:{
        fontWeight:'bold',
        fontSize:13,
    },
    
    mobile:`(max-width:${size.mobile})`,
    tabletS:`(max-width:${size.tabletS})`,
    tabletM:`(max-width:${size.tabletM})`,
    tabletL:`(max-width:${size.tabletL})`,
    laptop:`(max-width:${size.laptop})`,
    desktop:`(max-width:${size.desktop})`,

}

export default theme;