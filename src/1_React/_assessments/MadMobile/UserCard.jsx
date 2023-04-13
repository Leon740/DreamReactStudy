import React from 'react';
import UserDetail from './UserDetail';

function UserCard({ data, fnUpdateUser }) {
  const {
    id, name, email, phone, address: {
      street, city, suite, zipcode,
    },
  } = data;

  return (
    <section className="p-4 h-full rounded bg-slate-100">
      <UserDetail id={id} field="name" value={name} fnUpdateUser={fnUpdateUser} as="h3" className="text-xl" />
      <div className="text-sm">
        <UserDetail id={id} field="email" value={email} fnUpdateUser={fnUpdateUser} as="p" />
        <UserDetail id={id} field="phone" value={phone} fnUpdateUser={fnUpdateUser} as="p" />

        <div>
          <UserDetail id={id} field="street" value={street} fnUpdateUser={fnUpdateUser} as="p" className="inline" />
          {' '}
          <UserDetail id={id} field="city" value={city} fnUpdateUser={fnUpdateUser} as="p" className="inline" />
          {' '}
          <UserDetail id={id} field="suite" value={suite} fnUpdateUser={fnUpdateUser} as="p" className="inline" />
          {' '}
          <UserDetail id={id} field="zipcode" value={zipcode} fnUpdateUser={fnUpdateUser} as="p" className="inline" />
        </div>
      </div>
    </section>
  );
}
export default UserCard;
