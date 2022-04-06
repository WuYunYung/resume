import React from 'react';

const Title = function ({ children }) {
  return (
    <h2 className="bg-black text-white px-2 py-1 w-fit text-sm">{children}</h2>
  )
}

export default React.memo(Title)