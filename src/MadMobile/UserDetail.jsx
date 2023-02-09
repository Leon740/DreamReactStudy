import React from 'react';

function UserDetail({
  id = 0, field = '', value = '', fnUpdateUser = () => {}, as = 'span', className = '',
}) {
  const Tag = as;

  return (
    <Tag className={`mt-3 ${className}`} contentEditable suppressContentEditableWarning onBlur={(event) => event.target.innerText.length > 1 && fnUpdateUser(id, field, event.target.innerText)}>{value}</Tag>
  );
}
export default UserDetail;
