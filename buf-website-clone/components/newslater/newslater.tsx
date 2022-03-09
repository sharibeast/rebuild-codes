import React from 'react';

export default function Newslater() {
  return (
    <div className="py-14 px-6 flex flex-col justify-center items-center">
      <h1 className="text-center mb-4 text-xl">Sign up for the newsletter</h1>
      <input
        className="ring-1 focus:ring-gray-400 ring-gray-300 text-xl w-full sm:max-w-sm py-1 px-4"
        type="email"
        placeholder="Your email..."
      />
    </div>
  );
}
