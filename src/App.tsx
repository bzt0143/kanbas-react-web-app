import Labs from "./Labs";
import Kanbas from "./Kanbas";
import store from "./Kanbas/store";
import { Provider } from "react-redux";

import { HashRouter, Route, Routes, Link} from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Zitong Bao - Online Section</h1>
      <h4>My GitHub repo</h4>
      Please{' '}
      <a
        id='wd-lipsum'
        href='https://github.com/bzt0143/kanbas-react-web-app'
      >
        click here
      </a>{' '}
      to my github repo
      <br />
      <br />
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Provider store={store}>
      <div>
        <Link to="/Labs">Labs</Link> | <Link to="/Kanbas">Kanbas</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
      </Provider>
    </HashRouter>
  );
}
