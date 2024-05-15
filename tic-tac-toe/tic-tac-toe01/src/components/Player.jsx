import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [plName, setPlName] = useState(name);

  function handleEditClick(e) {
    setPlName(e.target.defaultValue);
    setIsEditing((editing) => !editing);
  }

  let playerName = <span className="player-name">{name}</span>;

  isEditing
    ? playerName
    : (playerName = <input type="text" required value={plName} />);
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="Player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
