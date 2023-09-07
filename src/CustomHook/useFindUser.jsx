import React, { useEffect, useState } from 'react';

const useFindUser = () => {
    const [user,setUser] = useState([]);
    useEffect(()=>{
     let allUser = localStorage.getItem('ibos-user');
     const newData = allUser ? JSON.parse(allUser):[];
     setUser(newData);
    },[])
    return {user}
};

export default useFindUser;