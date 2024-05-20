import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const User = () => {
  const { userId } = useParams();
  const [user, setUser] = useState('');
  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${userId}`)
      .then((res) => setUser(res.data.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <h2>User Information</h2>
      <img src={user.avatar} alt='profile' />
      <h3>email : {user.email}</h3>
      <h3>
        {user.first_name} {user.last_name}
      </h3>
    </>
  );
};

export default User;
