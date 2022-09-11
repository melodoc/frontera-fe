import { t } from 'i18next';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

interface IHeadProps {
  title: string;
  isLoading?: boolean;
}

export const Head = ({ title, isLoading }: IHeadProps): JSX.Element => {
  const [titleState, setTitleState] = useState(`${t(title)}`);

  useEffect(() => {
    if (isLoading) {
      setTitleState(`${t('Loading...')}`);
    }
  }, [t]);

  return (
    <Helmet defer={false}>
      <title>{titleState}</title>
    </Helmet>
  );
};
