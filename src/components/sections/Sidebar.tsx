import React from 'react'
import Link from 'next/link';
const Sidebar = () => {
  const menuItems = [
    {
      title: 'Home',
      children: [
        { title: 'Overview' },
        { title: 'Events' },
      ],
    },
    {
      title: 'About',
      children: [
        { title: 'Library Overview' },
        { title: 'Sections' },
        { title: 'Hours' },
        { title: 'Facilities' },
        { title: 'Policies' },
        { title: 'Membership' },
        { title: 'Staff' },
      ],
    },
    // Add more menu items here
  ];

  return (
    <div className=']
    '>
    <nav className="bg-slate-800">
      <ul>
        {menuItems.map((menuItem, index) => (
          <li key={index} >
            <Link href={`/${menuItem.title.toLowerCase()}`} className='text-yellow-200'>
              {menuItem.title}
            </Link>
            {menuItem.children && (
              <ul>
                {menuItem.children.map((child, childIndex) => (
                  <li key={childIndex}>
                    <Link href={`/${menuItem.title.toLowerCase()}/${child.title.toLowerCase()}`} className='text-green-400'>
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>

    </div>
  );
}

export default Sidebar