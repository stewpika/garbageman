import React from 'react';
import SomeExampleComponent from './components/example/someExampleComponent'
import ClickCount from './components/clickCount/clickCount';

type AppProps = {

}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <SomeExampleComponent />
      <ClickCount />
    </div>
  )
}

export default App

