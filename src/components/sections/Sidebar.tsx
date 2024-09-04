import React from 'react'
import Link from 'next/link';
import { Menu } from 'antd';
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
  const items2 = [{label:'about',key:'1'
    ,children:[
      {label:'library overview',key:'1.1'},
      {label:'sections',key:'1.2'},
      {label:'hours',key:'1.3'},
      {label:'facilities',key:'1.4'},
      {label:'policies',key:'1.5'},
      {label:'membership',key:'1.6'},
      {label:'staff',key:'1.7'},
    ]
  },{label:'digital',key:'2'
    ,children:[
      {type:'group',label:'research',children:[
        {label:'research overview',key:'2.1'},
        {label:'research sections',key:'2.2'},
        {label:'research hours',key:'2.3'},
        {label:'research facilities',key:'2.4'},
        {label:'research policies',key:'2.5'},
        {label:'research membership',key:'2.6'},
        {label:'research staff',key:'2.7'},
      ]}
    ]
  },{label:'research',key:'3'},{label:'events',key:'4'}];

  return (
    <div className='h-full'>
    {/* <nav className="bg-slate-800">
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
    </nav> */}

<Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
          />
    </div>
  );
}

export default Sidebar