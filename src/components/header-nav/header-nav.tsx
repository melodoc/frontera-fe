import i18next from "i18next";
import { Link as ConnectedLink } from "react-router-dom";

import { Link } from "../link";
import { URLs } from "../../__data__/urls";

export const HeaderNav = () => {
  return (
    <>
      <Link to={URLs.home.url} as={ConnectedLink}>
        {i18next.t("js.navigation.home")}
      </Link>
      <Link to={URLs.catalogCourses.url} as={ConnectedLink}>
        {i18next.t("js.navigation.suggestion")}
      </Link>
    </>
  );
};
