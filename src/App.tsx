import './App.css';
import Input from './components/input/Input';

function App() {
  const handleInputChange = (e: any) => {
    console.log(e);
  };
  return (
    <div className='App' data-testid='main-app'>
      <header className='App-header'>
        <p title='Welcome to log reader App'>Welcome to log reader App</p>
      </header>
      <main>
        <Input type='file' label='File input' onChange={handleInputChange} />
      </main>
    </div>
  );
}

export default App;
