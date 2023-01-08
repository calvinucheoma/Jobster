import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { JobsContainer, SearchContainer } from '../../components';



const AllJobs = () => {

  return (

    <>
      <SearchContainer/>
      <JobsContainer/>
    </>

  )

};

export default AllJobs;