import React from 'react';
import GuessWords from './GuessWords';
import Input from './Input';

function App() {
  return (
    <div>
      <Input />
      <GuessWords guessedWords={[]}/>
    </div>
  );
}

export default App;
