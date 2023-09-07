import React from 'react';
import { useParams } from 'react-router';
import userTeamList from '../../CustomHook/userTeamList';
import {useEffect, useState} from 'react';
import useFindUser from '../../CustomHook/useFindUser';

const AddMember = () => {
    const {teamName} = useParams();
    const {teamList} = userTeamList();
    const {user} = useFindUser();

    //state
    const [index,setIndex] = useState(null);
    const [memberList,setMemberList] = useState([]);
    const [userList,setUserList] = useState([]);
   
    //effect
  useEffect(() => {
    for(let i=0;i<teamList.length;i++){
        if(teamList[i].teamName===teamName){
            setIndex(i);
            setMemberList(teamList[i].memberList)
            break;
        }
    }
  }, [teamList]); 

  console.log("list ",userList);
    

    return (
        <div className='max-w-screen-lg mx-auto'>
            <h2>add Member {teamName}</h2>
            {}
        </div>
    );
};

export default AddMember;