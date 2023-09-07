import React, { useEffect, useState } from 'react';

const userTeamList = () => {
    const [teamList,setTeamList] = useState({});
    useEffect(()=>{
        let team = localStorage.getItem('ibos-team');
        team = team ? JSON.parse(team):[];
        setTeamList(team);
    },[])
    return {teamList};
};

export default userTeamList;