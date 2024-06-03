import React from 'react';
// eslint-disable-next-line import/extensions
import { MdArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function BackBtn() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className="flex items-center"
    >
      <MdArrowBack />
      <span>Back</span>
    </button>
  );
}
export default BackBtn;
