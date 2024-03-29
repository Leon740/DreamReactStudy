import React from 'react';
import { useParams, Link } from 'react-router-dom';

import CHARACTERS_DATA from '../data/characters.json';
import EPISODES_DATA from '../data/episodes.json';
import LOCATIONS_DATA from '../data/locations.json';

interface IDataItem {
  id: number | string;
  name: string;
  image?: string;
  species?: string;
  status?: string;
  gender?: string;
}

// const CATEGORIES_DATA = ['characters', 'episodes', 'locations'];
const DATA: { [key: string]: IDataItem[] } = {
  characters: [...CHARACTERS_DATA],
  episodes: [...EPISODES_DATA],
  locations: [...LOCATIONS_DATA]
};

function CategoryPage() {
  const params = useParams();

  const activeCategory: string = params.category || '';

  return (
    <section>
      <h1 className="text-4xl mt-16 mb-8">
        {activeCategory[0].toUpperCase()}
        {activeCategory.substring(1)}
      </h1>
      <ul className="flex flex-wrap -mx-4">
        {DATA[activeCategory].map((item: IDataItem) => {
          const { id, image, name, species, status, gender } = item;

          return (
            <li key={id} className="w-full sm:w-6/12 md:w-4/12 xl:w-3/12 px-4 pt-8">
              <div className="h-full bg-slate-800 px-4 py-4 rounded-lg">
                {image && species && <img src={image} alt={`${name}, ${species}`} />}
                <h2 className="text-2xl my-8">{name}</h2>
                {species && <p className="text-base">{species}</p>}
                {status && <p className="text-base">{status}</p>}
                {gender && <p className="text-base">{gender}</p>}
                {image && (
                  <Link
                    to={name}
                    className="block w-max px-4 py-2 mt-8 bg-slate-700 rounded-lg"
                    state={item}
                  >
                    DetailPage
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
export default CategoryPage;
