import { UITypography } from 'shared/components/ui-typography/ui-typography';
import { Logo } from 'components/logo/logo';

import style from './footer.module.scss';

interface FooterLinks {
  id: string;
  name: string;
  route: string;
}

const links: FooterLinks[] = [
  { id: '8cadb93', name: 'О нас', route: '/about' },
  { id: 'b893546', name: 'Курсы', route: '/courses' },
  { id: 'f4c18a24', name: 'Цены', route: '/prices' },
  { id: '4dffba48', name: 'Команда', route: '/team' },
  { id: 'cf5cbc76', name: 'FAQ', route: '/faq' },
  { id: '68525eaw', name: 'Написать нам', route: '/message' },
  { id: '4bc9332w', name: 'Вакансии', route: '/jobs' },
  { id: 'ab4133d7', name: 'Контакты', route: '/contacts' },
  { id: 'dc2e6ec6', name: 'Twitter', route: '/twitter' },
  { id: 'e7eb5eab', name: 'Telegram', route: '/telegram' },
  { id: '3e1492cf', name: 'Instagram', route: '/instagram' },
  { id: 'ff3df6ef', name: 'Лицензии', route: '/licenses' }
];

export const Footer = () => {
  return (
    <div className={style.container}>
      <footer className={style.footer}>
        <div className={style.footer__info}>
          <Logo />
          <UITypography
            variant="label"
            typographyStyle={{
              fontWeight: 'bold',
              color: 'secondary'
            }}
          >
            Frontera. Сделано ❤️ melodoc {new Date().getFullYear()}
          </UITypography>
        </div>
        <ul className={style.footer__list}>
          {links.map((link) => (
            <li key={link.id}>
              <a className={style.footer__link} href={link.route}>
                <UITypography
                  variant="span"
                  typographyStyle={{
                    fontWeight: 'normal',
                    color: 'secondary'
                  }}
                >
                  {link.name}
                </UITypography>
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
};
