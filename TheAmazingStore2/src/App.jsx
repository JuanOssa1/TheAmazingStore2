import { useState, useContext } from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import AppLogin from './components/AppLogin/AppLogin';
import AppMainPage from './components/AppMainPage/AppMainPage';
import AppFooter from './components/AppFooter/AppFooter';
import LogContext from './context/log-context';

function App() {
  const [searchState, setSearchState] = useState('');
  const logCtx = useContext(LogContext);

  return (
    <div className="App">
      <section id="HeaderApp">
        <AppHeader searchState={searchState} setSearchState={setSearchState} />
        {!logCtx.isValid && <AppLogin />}
        {logCtx.isValid && <AppMainPage searchState={searchState} />}
        <AppFooter />
      </section>
    </div>
  );
}

export default App;
