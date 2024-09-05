
// git config --global --unset user.name
// git config --global --unset user.email

// const items3 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
//   const key = String(index + 1);
//   return {
//     key: `sub${key}`,
//     icon: React.createElement(icon),
//     label: `subnav ${key}`,
//     children: new Array(4).fill(null).map((_, j) => {
//       const subKey = index * 4 + j + 1;
//       return {
//         key: subKey,
//         label: `option${subKey}`,
//       };
//     }),
//   };
// });
// const items2 = [{
//   label: 'about', key: '1'
//   , children: [
//     { label: 'library overview', key: '1.1' },
//     { label: 'sections', key: '1.2' },
//     { label: 'hours', key: '1.3' },
//     { label: 'facilities', key: '1.4' },
//     { label: 'policies', key: '1.5' },
//     { label: 'membership', key: '1.6' },
//     { label: 'staff', key: '1.7' },
//   ]
// }, { label: 'digital', key: '2' }, { label: 'research', key: '3' }, { label: 'events', key: '4' }];
// <Menu
//   mode="inline"
//   defaultSelectedKeys={['1']}
//   defaultOpenKeys={['sub1']}
//   style={{
//     height: '100%',
//     borderRight: 0,
//   }}
//   items={items2}
// />