import React from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import Wrapper from '../assets/wrappers/PageBtnContainer';
import { useSelector, useDispatch } from 'react-redux';
import { changePage } from '../features/allJobs/allJobsSlice';



const PageBtnContainer = () => {

  const {numOfPages, page} = useSelector((store) => store.allJobs);

  const dispatch = useDispatch();

  const pages = Array.from({length: numOfPages}, (_,index) => {
    return index + 1; //so that our array would not start from 0
  });

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
        newPage = 1;
    };
    dispatch(changePage(newPage));
  };

  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
        newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };
    
  return (

    <Wrapper>

        <button className="prev-btn" type='button' onClick={prevPage}>
            prev <HiChevronDoubleLeft/> 
        </button>

        <div className="btn-container">
            {
                pages.map((pageNumber) => {
                    return (
                        <button 
                            type='button' 
                            key={pageNumber} 
                            onClick={() => dispatch(changePage(pageNumber))}
                            className={pageNumber === page ? 'pageBtn active' : 'pageBtn'}
                        >
                            {pageNumber}
                        </button>
                    )
                })
            }
        </div>

        <button className="next-btn" type='button' onClick={nextPage}>
            next <HiChevronDoubleRight/> 
        </button>

    </Wrapper>

  )

};

export default PageBtnContainer;