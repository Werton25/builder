import React from 'react';

export default class HelpContent extends React.Component {
  render() {
    return (
      <table className='table'>
        <thead>
        <tr>
          <th>Сочетание клавиш</th>
          <th>Описание</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Ctrl + Enter</td>
          <td>Включить полноэкранный режим</td>
        </tr>
        <tr>
          <td>Ctrl + F</td>
          <td>Поиск по тексту</td>
        </tr>
        <tr>
          <td>Ctrl + Alt + L</td>
          <td>Отформатировать текст</td>
        </tr>
        </tbody>
      </table>
    );
  }
}
