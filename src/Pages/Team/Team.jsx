import React from 'react';
import useFindUser from '../../CustomHook/useFindUser';
import AddTeam from './AddTeam';
import TeamList from './TeamList';

const Team = () => {
    const {user} = useFindUser();
    console.log("users ",user);
    return (
        <div className='max-w-screen-lg mx-auto'>
            <AddTeam/>
            <TeamList/>

        </div>
    );
};

export default Team;