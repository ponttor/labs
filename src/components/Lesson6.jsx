import React from 'react';

export default class Lesson1 extends React.Component {
  render() {
    const style = {
      display: 'flex',          // Задаём flex-контейнер
      justifyContent: 'center', // Центрируем по горизонтали
      alignItems: 'center',     // Центрируем по вертикали
      height: '100vh',          // Высота контейнера равна 100% высоты видимой части окна браузера
      width: '100vw',           // Ширина контейнера равна 100% ширины видимой части окна браузера
    };

    return (
      <div style={style}>
        <iframe width='660' height='420' src='https://activate.infoprotector.com/cover/frame.php?video=02fb844d-5f7d-4ff3-b918-4d7657cfa99d' frameborder='0' referrerpolicy='unsafe-url'></iframe>
      </div>
    )
  }
}