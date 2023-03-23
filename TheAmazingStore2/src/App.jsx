import { useState } from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import AppLogin from './components/AppLogin/AppLogin';
import AppMainPage from './components/AppMainPage/AppMainPage';
import AppFooter from './components/AppFooter/AppFooter';
import LogProvider from './context/LogProvider';

function App() {
  const [isValid, setValid] = useState(true);

  return (
    <LogProvider className="App">
      <section id="HeaderApp">
        <AppHeader />
        {!isValid && <AppLogin setValid={setValid} />}
        {isValid && <AppMainPage />}
        <AppFooter />
      </section>
    </LogProvider>
  );
}

export default App;
