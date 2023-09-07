import React, { useEffect, useState } from 'react';

const userUserInfo = () => {
    const [userInfo,setUserInfo] = useState({});
    useEffect(()=>{
        let user = localStorage.getItem('ibos-login');
        user = user ? JSON.parse(user):[];
        setUserInfo(user);
    },[])
    return {userInfo};
};

export default userUserInfo;