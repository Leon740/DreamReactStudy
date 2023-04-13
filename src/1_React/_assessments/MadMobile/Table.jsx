/* eslint-disable no-unused-vars */
import React from 'react';
import fnSanitizeString from './utils/fnSanitizeString';

function TableTh({ label = '', value, activeField = '' }) {
  return (
    <th className={`p-4 text-left border-b-2 border-slate-600 ${fnSanitizeString(activeField) === fnSanitizeString(value) && 'text-red-600'}`}>{label}</th>
  );
}

function TableTd({
  as = 'td', className = 'p-4', activeField, field, label, query,
}) {
  const Tag = as;
  return (
    <Tag className={className}>
      {fnSanitizeString(activeField) === fnSanitizeString(field) && query.length > 1 ? (
        <span dangerouslySetInnerHTML={{ __html: fnSanitizeString(label).replace(fnSanitizeString(query), `<span class='bg-red-600 text-white'>${fnSanitizeString(query)}</span>`) }} />
      ) : (
        label
      )}
    </Tag>
  );
}

function Table({
  data, activeField, query, options,
}) {
  return (
    <div className="overflow-x-auto mt-10">
      <table className="w-full">
        <thead>
          <tr>
            {options.map((option) => <TableTh key={option.id} label={option.label} value={option.value} activeField={activeField} />)}
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={user.id} className={`border-b-2 ${index % 2 === 0 ? 'bg-slate-100' : ''}`}>
              <TableTd field="name" activeField={activeField} label={user.name} query={query} />
              <TableTd field="email" activeField={activeField} label={user.email} query={query} />
              <TableTd field="phone" activeField={activeField} label={user.phone} query={query} />
              <td className="p-4">
                <TableTd as="span" className="" field="street" activeField={activeField} label={user.address.street} query={query} />
                ,
                {' '}
                {user.address.city}
                ,
                {' '}
                {user.address.suite}
                ,
                {' '}
                {user.address.zipcode}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
