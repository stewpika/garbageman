import React from 'react';
import ClickCount from './components/clickCount/clickCount';
import AboutMe from './components/page1/aboutMe';

type AppProps = {

}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <AboutMe />
      <ClickCount />
    </div>
  )
}

export default App

