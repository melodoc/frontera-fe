import { getUid } from 'services/get-uid';

const themesData = [
  {
    name: 'HTML',
    checked: true
  },
  {
    name: 'CSS',
    checked: false
  },
  {
    name: 'JavaScript',
    checked: false
  },
  {
    name: 'git',
    checked: true
  },
  {
    name: 'webpack',
    checked: false
  },
  {
    name: 'TypeScript',
    checked: false
  }
];

const themes = themesData.map((item) => {
  return { ...item, id: getUid() };
});

export const themesRes = {
  status: {
    code: 0
  },
  themes
};

export const themesErr = {
  status: {
    code: 2
  },
  errors: [
    {
      field: 'suggestions',
      text: 'Failed to set values'
    }
  ]
};
