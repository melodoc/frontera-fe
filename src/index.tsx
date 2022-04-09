import { StrictMode } from "react";
import { I18nextProvider } from "react-i18next";
import ReactDOM from "react-dom";

import { i18n } from "./common/i18n";
import { App } from "./app";

// export const mount = async (Component) => {

//     ReactDom.render(
//         <Component />,
//         document.getElementById('app')
//     );

//     ReactDom.render(
//         <I18nextProvider i18n={i18n}>
//             <App />
//         </I18nextProvider>
//         ,
//         document.getElementById('app')
//     );
// };

// export const unmount = () => {
//     ReactDom.unmountComponentAtNode(document.getElementById('app'));
// };

ReactDOM.render(
  <StrictMode>
    {/* <Router basename={getBaseHref()}> */}
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
    {/* </Router> */}
  </StrictMode>,
  document.getElementById("root")
);
