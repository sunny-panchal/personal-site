const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Sunny Panchal',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Sunny Panchal',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Sunny Panchal',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Sunny Panchal',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Sunny Panchal',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
