import React, { Fragment, useState, useEffect } from 'react';
import MarkdownView from 'react-showdown';
import Navbar from '../components/Navbar';
import axios from '../utils/axios';

const Template = ({ match }) => {
  const [page, setPage] = useState({});

  useEffect(() => {
    axios.get(`/pages/${match.url}`).then((res) => {
      setPage(res.data.data);
    });
  }, [match]);
  return (
    <Fragment>
      <Navbar title='virtual conference home' />
      <div
        className='w-full flex-1 py-3 bg-black'
        style={{ minHeight: 'calc(95vh - 64px)', color: 'white' }}
      >
        <MarkdownView
          markdown={page.content}
          options={{ tables: true, emoji: true }}
        />
      </div>
    </Fragment>
  );
};

export default Template;
