import React, { useEffect, useState } from 'react';
import userTeamList from '../../CustomHook/userTeamList';
import { Link } from 'react-router-dom';

const TeamList = () => {
   const {teamList} = userTeamList();

   const [list,setList] = useState([]);

  useEffect(() => {
    if (Array.isArray(teamList)) {
      setList(teamList);
    }
    console.log("first");
  }, [teamList]);
 

 //console.log("te3am ",list)
    return (
        <div className='grid grid-cols-3 gap-3'>
      {list.length === 0 ? (
        <div>Loading...</div>
      ) : (
        list.map((team) => (
          <div key={team.teamName} className="card-body shadow-lg">
            <h2 className="card-title">{team.teamName}</h2>
            <p>{team.userEmail}</p>
            <p>{team.description}</p>
            <Link className='btn btn-success text-white w-36' to={`/addMember/${team.teamName}`}>Add User</Link>
          </div>
        ))
      )}
    </div>
    );
};

export default TeamList;