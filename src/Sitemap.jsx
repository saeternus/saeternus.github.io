import React from 'react';
import "./Sitemap.css"

const Sitemap = () => {
  const pages = [
    { name: 'home', path: '/' },
    { name: 'courses/gis', path: '/course/gis' },
    { name: 'services', path: '/services' },
    { name: 'contact-us', path: '/contact-us' },
  ];

  return (
    <div className='sitemapcontainer'>
      <h2>Sitemap</h2>
      <ul>
        {pages.map((page, index) => (
          <li key={index}>
            <a href={page.path}>{page.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sitemap;