import React from 'react';
import { useState, useEffect } from 'react';


import { ArtistCard, Error, Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
const TopArtists = () => {
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);
  

  const { data, isFetching, error } = useGetTopChartsQuery();


  if (isFetching) return <Loader title="Loading top artists"></Loader>;
  if (error) return <Error />;
  return (
    <div className="flex flex-col ">
      <h2 className="font-bold text-3xl  text-white text-left mt-4 mb-10">
        Top artist
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((track, ) => (
          <ArtistCard
            key={track?.key}
            track={track}
            
          />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
