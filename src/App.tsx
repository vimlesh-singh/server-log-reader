import './App.css';
import Input from './components/input/Input';

function App() {
  const readFile = (file: any) => {
    // Check if the file type is .log.
    console.log(file);
    // if (file.name && !file.name.endsWith('.log')) {
    //   console.log('File is not supported.', file.type, file);
    //   alert(`'File is not supported.', ${file.type}, ${file.name}`)
    //   return;
    // }
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.addEventListener('progress', event => {
      if (event.loaded && event.total) {
        const percent = (event.loaded / event.total) * 100;
        console.log(`Progress: ${Math.round(percent)}`);
      }
    });
    reader.addEventListener('load', event => {
      const result = event.target?.result;
      const dataArray = String(result).split(/\n/);
      const visitedPages: string[] = [];
      const uniqueVisitedPages: string[] = [];
      const visitedIpList: string[] = [];
      dataArray.forEach(val => {
        let pageVisitIndex = val.search(/\s/);
        if (pageVisitIndex > -1) {
          let visitedPage = val.substring(0, pageVisitIndex);
          visitedPages.push(visitedPage);
          if (!visitedIpList.includes(val)) {
            visitedIpList.push(val);
            uniqueVisitedPages.push(visitedPage);
          }
        }
      });
      console.log({ visitedPages, uniqueVisitedPages });
    });
    reader.readAsText(file);
  };

  const handleInputChange = (e: any) => {
    readFile(e.target.files[0]);
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
