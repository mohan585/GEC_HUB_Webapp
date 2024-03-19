"use client"

import React, { useState, useEffect } from 'react';
import { fetchSearchResults } from '@/lib/actions/user.actions';
import ResultCard from '../cards/ResultCard';

const SearchResults = ({ query }:any ) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  // console.log(query)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchSearchResults(query);
        setResults(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [query]); // This will re-run the effect whenever the query changes

  return (
    <>
          <div className='mt-14 flex flex-col gap-9'>
        {results.length === 0 ? (
          <p className='no-result'>No Result</p>
        ) : (
          <>
            {results.map((post:any) => (
                <ResultCard
                name={post.name}
                last_reval={post.last_revalution}
                createdAt={post.createdAt}
              />
            ))}
          </>
        )}
      </div>
    </>
  ); // Return the API data directly
};

export default SearchResults;
