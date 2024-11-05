import ActionButton from '@/components/ActionButton';
import BackButton from '@/components/BackButton';
import Heading from '@/components/Heading'
import { DeleteIcon, EditIcon } from '@/components/Icons';
import axios from 'axios'
import Link from 'next/link'
import React from 'react'

async function getData() {
  try {
    const res = await axios.get(`${process.env.DOMAIN}/api/settings/users/list`);
    return res.data.data;
  } catch (error) {
    console.log(error.message);
  }
}
 

const page = async () => {
  const users = await getData();

  return (
    <div className='content__area'> 
      <div className="flex items-center justify-between mb-5 md:mb-6 lg:mb-7">
        <BackButton />
        <Link href={"/settings/users/create"} className='btn-primary'>Add user</Link>
      </div>
      
      <table className="table mt-6">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <div className="flex gap-3"> 
                  <ActionButton icon={<EditIcon className="mx-auto" />} label="" btnType="sm" link="link" url={`/settings/users/${user._id}`} />
                  <ActionButton icon={<DeleteIcon className="mx-auto" />} label="" btnType="sm" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default page