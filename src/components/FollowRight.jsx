import React from 'react';

const FollowRight = () => {
  const features = [
    { title: 'Offline Reading', description: 'Download issues to read offline' },
    { title: 'Explore', description: 'Explore various articles' },
    { title: 'Access to Archives', description: 'Unlimited access to past issues' },
    { title: 'Bookmark', description: 'Bookmark articles to read later' },
  ];

  return (
    <div className="bg-black text-white p-6 rounded-lg shadow-lg space-y-4">
      {features.map((feature, index) => (
        <div key={index}>
          <h3 className="font-semibold">{feature.title}</h3>
          <p className="text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FollowRight;
