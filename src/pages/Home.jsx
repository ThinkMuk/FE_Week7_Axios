import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from '../components/Card';
import styled from 'styled-components';

const Home = () => {
  const WrapUsers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    margin-bottom: 10px;
  `;
  const [usersInfo, setUsersInfo] = useState('');
  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users?page=1&per_page=9`)
      .then((res) => setUsersInfo(res.data.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <h2>User List</h2>
      <WrapUsers>
        {usersInfo &&
          usersInfo.map((user) => (
            <Card img={user.avatar} name={`${user.first_name} ${user.last_name}`} id={user.id} key={user.id} />
          ))}
      </WrapUsers>
      <Link to='./Menu'>메뉴 페이지로 고고</Link>
    </>
  );
};

export default Home;
