import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addName, removeName } from './redux/namesSlice'; 

function NamesList() {
  const namesList = useSelector(state => state.names.namesList);
  const dispatch = useDispatch();
  const [newNameInput, setNewNameInput] = useState('');

  useEffect(() => {
    const storedNames = localStorage.getItem('namesList');
    if (storedNames) {
      dispatch({ type: 'names/loadNames', payload: JSON.parse(storedNames) });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('namesList', JSON.stringify(namesList));
  }, [namesList]);

  const handleAddName = () => {
    if (newNameInput.trim() !== '') {
      dispatch(addName(newNameInput.trim()));
      setNewNameInput(''); 
    }
  };

  const handleRemoveName = (name) => {
    dispatch(removeName(name));
  };

  return (
    <div>
      <h2>Список имен:</h2>
      <ul>
        {namesList.map((name, index) => (
          <li key={index}>
            {name} <button onClick={() => handleRemoveName(name)}>Удалить</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newNameInput}
        onChange={(e) => setNewNameInput(e.target.value)}
        placeholder="Введите новое имя"
      />
      <button onClick={handleAddName}>Добавить имя</button>
    </div>
  );
}

export default NamesList;
