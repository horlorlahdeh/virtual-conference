import React, { useEffect, useState } from 'react';
import SpeakerItem from './SpeakerItem';
import axios from '../utils/axios';

const EventOrganisers = () => {
  const [speakers, setSpeakers] = useState([]);
  useEffect(() => {
    axios.get('/speakers').then((res) => {
      setSpeakers(res.data.data);
    });
  }, []);
  return (
    <section className='text-center bg-black text-white py-20 capitalize pb-36 m-auto'>
      <h1 className='text-3xl md:text-5xl md:font-bol lg:text-7xl lg:font-bold mb-20 font-semibold'>
        Event Speakers
      </h1>
      <div className='grid grid-cols-2 lg:grid-cols-4  gap-y-8 w-10/12 mx-auto max-w-screen'>
        {speakers.map((speaker, index) => (
          <SpeakerItem key={index} speaker={speaker} />
        ))}
      </div>
    </section>
  );
};

export default EventOrganisers;
