import React, { useEffect, useState } from 'react';

import './App.css';

import fnSanitizeString from './utils/fnSanitizeString';

import Select from './Select';
import UserCard from './UserCard';
import Table from './Table';
import ErrorMessage from './ErrorMessage';

function App() {
  // fetch users
  const STATUSES = { pending: 'pending', rejected: 'rejected', fulfilled: 'fulfilled' };

  const [stStatus, setStStatus] = useState({ status: STATUSES.pending, error: '' });
  const [stUsers, setStUsers] = useState([]);

  const defaultSort = { id: 0, value: 'name', label: 'name' };

  useEffect(() => {
    console.log('useEffect');
    fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
      .then((response) => {
        if (!response.ok) {
          setStStatus({ status: STATUSES.rejected, error: response.status });
        }
        return response.json();
      })
      .then((data) => {
        if (data.length) {
          setStUsers(data.sort((a, b) => a[defaultSort.value].localeCompare(b[defaultSort.value])));
          setStStatus((prev) => ({ ...prev, status: STATUSES.fulfilled }));
        }
      });
  }, []);

  // update user
  function fnUpdateUser(id, field, value) {
    setStUsers((prev) => (prev.map((user) => {
      if (user.id === id) {
        if (field === 'street' || field === 'city' || field === 'suite' || field === 'zipcode') {
          return { ...user, address: { ...user.address, [field]: value } };
        }

        return { ...user, [field]: value };
      }

      return user;
    })));
  }

  // filter users
  const SELECT_OPTIONS = [
    defaultSort,
    { id: 1, value: 'email', label: 'email' },
    { id: 2, value: 'phone', label: 'phone' },
    { id: 3, value: 'street', label: 'address' },
  ];

  const [stQuery, setStQuery] = useState('');
  const [stFilterByField, setStFilterByField] = useState(defaultSort.value);

  function fnGetFilteredUsers() {
    if (stQuery.length > 1) {
      if (stFilterByField === 'street') {
        return stUsers.filter((user) => fnSanitizeString(user.address[stFilterByField]).includes(fnSanitizeString(stQuery)));
      }
      return stUsers.filter((user) => fnSanitizeString(user[stFilterByField]).includes(fnSanitizeString(stQuery)));
    }

    return stUsers;
  }

  // sort users
  function fnSortUsers(field) {
    setStUsers((prev) => [...prev].sort((a, b) => (field === 'street' ? a.address[field].localeCompare(b.address[field]) : a[field].localeCompare(b[field]))));
  }

  return (
    <main className="container mx-auto pl-5 pr-5">
      <header className="mt-10 mb-10 sm:flex items-center justify-between">

        <div className="flex sm:w-8/12 lg:w-6/12">
          <div className="pr-4 w-9/12 w-full">
            <input value={stQuery} onChange={(event) => setStQuery(event.target.value)} placeholder="Search" className="w-full border-solid border-2 border-slate-600 rounded p-2" />
          </div>
          <Select label="Filter by" className="flex flex-col pl-4" onChange={setStFilterByField} options={SELECT_OPTIONS} />
        </div>

        <Select label="Sort by" className="mt-5 sm:mt-0 sm:w-4/12 lg:w-2/12" onChange={fnSortUsers} options={SELECT_OPTIONS} />
      </header>

      {stStatus.status === STATUSES.rejected && (
        <ErrorMessage>
          { stStatus.error }
          {' '}
          Error
        </ErrorMessage>
      )}

      {stStatus.status === STATUSES.pending && (
        <div className="flex p-3">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span>Loading ...</span>
        </div>
      )}

      {stStatus.status === STATUSES.fulfilled && (
        <>
          <div className="overflow-hidden">
            {fnGetFilteredUsers().length > 0 ? (
              <ul className="flex flex-wrap -m-4">
                {fnGetFilteredUsers().map((user) => (
                  <li key={user.id} className="w-full sm:w-6/12 lg:w-4/12 xl:w-3/12 p-4"><UserCard data={user} fnUpdateUser={fnUpdateUser} /></li>
                ))}
              </ul>
            ) : (
              <ErrorMessage>No results</ErrorMessage>
            )}
          </div>
          {fnGetFilteredUsers().length > 0 ? (
            <Table data={fnGetFilteredUsers()} activeField={stFilterByField} query={stQuery} options={SELECT_OPTIONS} />
          ) : (
            <ErrorMessage>No results</ErrorMessage>
          )}
        </>
      )}
    </main>
  );
}

export default App;
