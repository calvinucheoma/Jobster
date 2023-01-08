import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/SearchContainer';
import { clearFilters, handleChange } from '../features/allJobs/allJobsSlice';
import FormRow from './FormRow';
import FormRowSelect from './FormRowSelect';





const SearchContainer = () => {

  const [localSearch, setLocalSearch] = useState('');

  const {
      isLoading, 
      search, 
      searchStatus, 
      searchType, 
      sort,
      sortOptions
  } = useSelector((store) => store.allJobs);

  const {jobTypeOptions, statusOptions} = useSelector((store) => store.job);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    // if(isLoading) return;
    dispatch(handleChange({name:e.target.name, value:e.target.value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalSearch('');
    dispatch(clearFilters());
  };

  const debounce = () => {
    let timeoutID;
    return (e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        dispatch(handleChange({name:e.target.name, value:e.target.value}));
      },1000);
    };
  };

  const optimizedDebounce = useMemo(() => debounce(), []);

  return (

    <Wrapper>

      <form className="form">
        
        <h4>search form</h4>

        <div className="form-center">

          <FormRow 
            type='text'
            name='search'
            value={localSearch}
            handleChange={optimizedDebounce}
          />

          <FormRowSelect
            labelText='status'
            name='searchStatus'
            value={searchStatus}
            handleChange={handleSearch}
            list={['all', ...statusOptions]}
          />

          <FormRowSelect
            labelText='type'
            name='searchType'
            value={searchType}
            handleChange={handleSearch}
            list={['all', ...jobTypeOptions]}
          />

          <FormRowSelect
            name='sort'
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />

          <button 
            className="btn btn-block btn-danger" 
            disabled={isLoading}
            onClick={handleSubmit}
          >
            Clear Filters
          </button>

        </div>

      </form>

    </Wrapper>

  )

};

export default SearchContainer;