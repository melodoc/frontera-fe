import { Head } from '../../components/head/head';
import { Header } from '../../components/header/header';
import { Preview } from '../../components/preview/preview';
import { Trending } from '../../components/trending/trending';

export const HomePage = () => {
  return (
    <>
      <Head title='Main' />
      <Header showSearch />
      <Preview />
      <Trending />
    </>
  );
};
