import logo from './logo.svg';
import './App.css';

function App() {
  const style = {
    display: 'flex',          // Задаём flex-контейнер
    justifyContent: 'center', // Центрируем по горизонтали
    alignItems: 'center',     // Центрируем по вертикали
    height: '100vh',          // Высота контейнера равна 100% высоты видимой части окна браузера
    width: '100vw',           // Ширина контейнера равна 100% ширины видимой части окна браузера
  };
  return (
    <div className="App">
      <header className="App-header">
        <div style={style}>
          <iframe
            width='660' height='420'
            src='https://activate.infoprotector.com/cover/frame.php?video=358fe3d1-f5de-4e88-9733-8ce7d9aba4e2'
            frameBorder='0'
            referrerPolicy='unsafe-url'
          />
        </div>
      </header>
    </div>
  );
}

export default App;
