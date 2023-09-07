import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {TEInput} from 'tw-elements-react';
import userUserInfo from '../../CustomHook/userUserInfo';

const AddTeam = () => {
  const [teamName,setTeamName] = useState('');
  const [description,setDescription] = useState('');
  const {userInfo} = userUserInfo();
  
  const team = {
    teamName,
    userEmail:userInfo.email,
    description,
    memberList:[]
  }
   const handleSubmit = () => {
     let prev = localStorage.getItem('ibos-team');
     let check = prev ? JSON.parse(prev) : [];
     check = [...check,team];
     localStorage.setItem('ibos-team',JSON.stringify(check));
     setTeamName('');
   }

    return (
        <>
        <button className="btn my-3" onClick={()=>document.getElementById('my_modal_2').showModal()}>Create Team</button>
    <dialog id="my_modal_2" className="modal">
    <div className="modal-box">
        <form>
              <TEInput
                type="text"
                placeholder='Team Name'
                size="lg"
                className="mb-6 h-10 border border-gray-300 ps-3"
                name='name'
                defaultValue={teamName}
                onBlur={(e)=>{setTeamName(e.target.value)}}
              ></TEInput>
              <textarea 
                rows={50}
               cols={60}
                type="text"
                placeholder='Description'
                size="lg"
                className="mb-6 h-10 border border-gray-300 ps-3"
                name='description'
                defaultValue={teamName}
                onBlur={(e)=>{setDescription(e.target.value)}}
              ></textarea>

              <div className="text-center lg:text-left">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    Create Team
                  </button>
              </div>
            </form>


    </div>
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
        </>
    );
};

export default AddTeam;