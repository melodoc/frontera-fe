import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { URLs } from "../../../__data__/urls";
import { Loader } from "../../../components/loader/loader";

export const Processing = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push(URLs.catalogCourses.url);
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Loader />;
};
