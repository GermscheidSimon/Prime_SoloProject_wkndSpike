import './App.css';
import AudioCtrls from './components/AudioCtrls/AudioCtrls'
import FileUpload from './components/FileUpload/FileUpload'

function App() {

  return (
    <div className="App">
      <header>Play Audio!!</header>
        <AudioCtrls/>
        <FileUpload/>
    </div>
  );
}

export default App;
