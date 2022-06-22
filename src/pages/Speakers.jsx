import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Register from '../components/Register';
import Date from '../components/speakers/Date';
import Developers from '../components/speakers/Developers';
import Hero from '../components/speakers/Hero';
import SignUp from '../components/speakers/SignUp';
import axiosInstance from '../utils/axios';

const Speakers = () => {
  const [speakers, setSpeakers] = useState([]);
  useEffect(() => {
    axiosInstance.get('/speakers').then((res) => {
      setSpeakers(res.data.data);
      console.log(res.data.data);
    });
  }, [setSpeakers]);
  return (
    <div>
      <Navbar title='virtual conference speakers' />
      <Hero />
      <Developers speakers={speakers} />
      <SignUp />
      <Date />
      <Register />
    </div>
  );
};

export default Speakers;
