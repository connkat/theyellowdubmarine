'use client'

import { useEffect, useState } from 'react';

import '98.css';

import { water2 } from '../assets';
import { client } from '../lib/sanity';

type Photo = {
  _id: string;
  year: number;
  tag: string;
  image: {
    asset: {
      url: string;
    };
  };
};

export default function Photos() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch<Photo[]>(
        `*[_type == "photo"] | order(year desc) { _id, year, tag, image { asset -> { url } } }`
      )
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center pt-[10%] min-h-full bg-repeat bg-[length:20%]" style={{ backgroundImage: `url(${water2.src})` }}>
        <div className="window" style={{ width: 300 }}>
          <div className="title-bar">
            <div className="title-bar-text">Photos</div>
          </div>
          <div className="window-body">
            <p>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (photos.length === 0) {
    return (
      <div className="flex justify-center pt-[10%] min-h-full bg-repeat bg-[length:20%]" style={{ backgroundImage: `url(${water2.src})` }}>
        <div className="window" style={{ width: 400 }}>
          <div className="title-bar">
            <div className="title-bar-text">Photos</div>
          </div>
          <div className="window-body">
            <p>We're working hard to track down evidence of the party bus! Come back soon!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 min-h-full bg-repeat bg-[length:20%]" style={{ backgroundImage: `url(${water2.src})`, overflow: 'hidden' }}>
      <div className="window" style={{ width: '100%', maxWidth: 900, margin: '3rem auto 0' }}>
        <div className="title-bar">
          <div className="title-bar-text">Photos</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>
        <div className="window-body">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '1rem',
            }}
          >
            {photos.map((photo) => (
              <div key={photo._id} className="window">
                <div className="title-bar">
                  <div className="title-bar-text">
                    {photo.tag ?? 'Photo'} — {photo.year}
                  </div>
                </div>
                <div className="window-body" style={{ padding: 4 }}>
                  <img
                    src={photo.image.asset.url}
                    alt={photo.tag ?? 'Photo'}
                    style={{ width: '100%', display: 'block' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
