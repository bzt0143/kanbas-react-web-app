// import Labs from './Labs';
// import Kanbas from './Kanbas';
// import { HashRouter, Route, Routes } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// export default function App() {
//   return (
//     <HashRouter>
//       <div>
//         <h1>Zitong Bao - Online Section</h1>
//         <h4>My GitHub repo</h4>
//         Please 
//         <a
//           id='wd-lipsum'
//           href='https://github.com/bzt0143/kanbas-react-web-app'
//         >
//           click here
//         </a>
//         to my github repo
//         <br />
//         <br />
//         <Link to='/Labs'>Labs</Link> | <Link to='/Kanbas'>Kanbas</Link>
//         <Routes>
//           <Route path='/Labs/*' element={<Labs />} />
//           <Route path='/Kanbas/*' element={<Kanbas />} />
//         </Routes>
//       </div>
//     </HashRouter>
//   );
// }


import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Route, Routes, Link, Navigate } from 'react-router-dom';


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
      <div>
        <Link to="/Labs">Labs</Link> | <Link to="/Kanbas">Kanbas</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
