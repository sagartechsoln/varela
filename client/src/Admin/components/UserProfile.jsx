import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/profile.png';
import { Link } from 'react-router-dom';

const UserProfile = ({ data }) => {
  const { currentColor } = useStateContext();

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96 z-[99]">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <div className="relative">
          <img
            className="rounded-full h-24 w-24"
            src={avatar}
            alt="user-profile"
          />
        </div>
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">{data.firstname + ' ' + data.lastname}</p>
          <p className="text-gray-500 text-sm dark:text-gray-400">{data.position}</p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">{data.email}</p>
        </div>

      </div>
      <div>
        {userProfileData.map((item, index) => (
          <Link to={`/Admin${item.link}`}>
            <a>
              <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
                <button
                  type="button"
                  style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                  className=" text-xl rounded-lg p-3 hover:bg-light-gray"
                >
                  {item.icon}
                </button>

                <div>
                  <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
                  <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
                </div>

              </div>
            </a>
          </Link>
        ))}
      </div>
      <div className="mt-5">
        <button
          type="button"
          onClick={() => window.location.href = ('./Logout')}
          style={{ backgroundColor: currentColor }}
          className={`font-bold p-3 w-full rounded-md hover:drop-shadow-xl hover:bg-red-500`}
        >
          Logout
        </button>
      </div>
    </div>

  );
};

export default UserProfile;
