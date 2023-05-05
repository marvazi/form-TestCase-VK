import React, { useState } from 'react';

import './index.css';

function App() {
  const [tower, setTower] = useState('');
  const [floor, setFloor] = useState('');
  const [room, setRoom] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      tower,
      floor,
      room,
      date,
      time,
      comment,
    };
    console.log(JSON.stringify(data));
  };

  const handleClear = () => {
    setTower('');
    setFloor('');
    setRoom('');
    setDate('');
    setTime('');
    setComment('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Выберите башню:
        <select value={tower} onChange={(e) => setTower(e.target.value)}>
          <option value="">--Выберите башню--</option>
          <option value="А">А</option>
          <option value="Б">Б</option>
        </select>
      </label>
      <br />
      <label>
        Выберите этаж:
        <select value={floor} onChange={(e) => setFloor(e.target.value)}>
          <option value="">--Выберите этаж--</option>
          {[...Array(25)].map((_, i) => (
            <option key={i} value={i + 3}>
              {i + 3}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Выберите переговорку:
        <select value={room} onChange={(e) => setRoom(e.target.value)}>
          <option value="">--Выберите переговорку--</option>
          {[...Array(10)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Выберите дату:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <br />
      <label>
        Выберите время:
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </label>
      <br />
      <label>
        Комментарий:
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Введите комментарий"
        />
      </label>
      <br />
      <button type="submit">Отправить</button>
      <button type="button" onClick={handleClear}>
        Очистить
      </button>
    </form>
  );
}

export default App;
