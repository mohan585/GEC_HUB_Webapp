"use client"
import ResultCard from '@/components/cards/ResultCard';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {

  const [result, setResult] = useState({ posts: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Set loading to true before fetching data

    fetch('https://gec_results-1-b4240270.deta.app/viewresultslist')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setResult({ posts: data });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false after fetching data
      });
  }, []);

  return (
    <>

        <h1 className='head-text text-left'>Results</h1>
          
        <section className='mt-9 flex flex-col gap-10'>
          {loading ? (
            <div className='no-result grid justify-items-center'><Image src="/assets/loader.svg" alt='loader image' width={44} height={44} /><p className='mt-4'>Loading...</p></div>
          ) : result.posts.length === 0 ? (
            <p className='no-result'>No results found</p>
          ) : (
            <>
              {result.posts.map((post) => (
                <ResultCard
                  name={post.name}
                  last_reval={post.last_revalution}
                  createdAt={post.createdAt}
                />
              ))}
            </>
          )}
        </section>

    </>
  )
}
