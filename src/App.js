import './App.css';
import './component/navbar.css'
import { Logo } from './component/logo';
import { Fragment } from 'react';
import { Links } from './component/Link';
import { Button } from './component/connect';

function App() {
  let linkarr=["Service","Projects","About"]
  return (
    <Fragment>
      <div className="navbar">
        <Logo />
        <div className="link">
          <Links data={linkarr} />
        </div>
        <Button />
      </div>
    </Fragment>
  );
}

export default App;
