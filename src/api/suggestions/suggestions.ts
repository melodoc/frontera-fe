const imgURL: string = window.SPA_CONFIG.IMG_URL || '';

export const courseListRes = {
  status: {
    code: 0
  },
  courseList: [
    {
      id: '1',
      label: 'React',
      imageSrc: `${imgURL}/remote-assets/images/suggestions/sg-course-1.jpg`
    },
    {
      id: '2',
      label: 'CI/CD',
      imageSrc: `${imgURL}/remote-assets/images/suggestions/sg-course-2.jpg`
    },
    {
      id: '3',
      label: 'Изучаем JS',
      imageSrc: `${imgURL}/remote-assets/images/suggestions/sg-course-3.jpg`
    },
    {
      id: '4',
      label: 'git',
      imageSrc: `${imgURL}/remote-assets/images/suggestions/sg-course-4.jpg`
    }
  ]
};

export const courseListErr = {
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
