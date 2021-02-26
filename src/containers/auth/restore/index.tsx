import React from 'react';

import Button from '../../../components/button';

import HeaderForm from '../../../components/header-form';
import TitleWithSubtitle from '../../../components/title-with-subtitle';
import Input from '../../../components/input';

import style from '../style.css';

class Restore extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeaderForm />
        <main className={style.container}>
          <section className={style.form}>
            <TitleWithSubtitle type={'restore'} />
            <form method="post" action="#">
              <div>
                <Input label="Email Address" id="restoreEmail" name="email" type="email" placeholder="email@example.com" />
              </div>
              <div className={style.buttons}>
                <Button>
                  Reset
              </Button>
              </div>
            </form>
            <div className={style.buttons}>
              <Button>
                Cancel
              </Button>
            </div>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default Restore;