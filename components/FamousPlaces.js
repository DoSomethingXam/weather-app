import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LondonImg from '../public/images/london.jpg';
import NewYorkImg from '../public/images/new-york.jpg';
import ParisImg from '../public/images/paris.jpg';
import TokyoImg from '../public/images/tokyo.jpg';

const places = [
  {
    name: 'London',
    image: LondonImg,
    url: '/location/london-2643743'
  },
  {
    name: 'New York',
    image: NewYorkImg,
    url: '/location/new-york-city-5128581'
  },
  {
    name: 'Paris',
    image: ParisImg,
    url: '/location/paris-2968815'
  },
  {
    name: 'Tokyo',
    image: TokyoImg,
    url: '/location/tokyo-1850147'
  },
];

export default function FamousPlaces() {
  return (
    <div className='places'>
      <div className="places__row">
        {places.length > 0 && places.map((place, index) => (
          <div className="places__box" key={index}>
            <Link href={place.url}>
              <a>
                <div className='places__image-wrapper'>
                  <Image src={place.image} alt={`${place.name} Image`} layout='fill' objectFit='cover'/>
                </div>

                <span>{place.name}</span>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
