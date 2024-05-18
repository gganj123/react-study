import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [plName, setPlName] = useState(name);

  function handleEditClick(e) {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    console.log(event);
    setPlName(event.target.value);
  }

  let playerName = <span className="player-name">{plName}</span>;

  isEditing
    ? (playerName = (
        <input type="text" required value={plName} onChange={handleChange} />
      ))
    : null;
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="Player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
