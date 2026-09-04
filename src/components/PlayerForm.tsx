import { useState } from "react";
import { X } from "lucide-react";

type PlayerFormProps = {
  onSubmit: (names: [string, string]) => void;
  onClose: () => void;
};

const PlayerForm = ({ onSubmit, onClose }: PlayerFormProps) => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit([name1.trim() || "Player 1", name2.trim() || "Player 2"]);
    onClose();
  }

  return (
    <div
  style={{
    position: "fixed",
    inset: 0,
    background: "rgba(13, 21, 33, 0.6)", // var(--color-black-navy) at 60% opacity
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <form
    onSubmit={handleSubmit}
    style={{
      background: "var(--color-blush)",
      padding: 24,
      borderRadius: 8,
      width: 280,
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
    }}
  >
    <button
      type="button"
      onClick={onClose}
      style={{
        position: "absolute",
        top: 8,
        right: 8,
        background: "none",
        border: "none",
        color: "var(--color-navy-dark)",
        cursor: "pointer",
      }}
    >
      <X size={20} />
    </button>

    <h2 style={{ margin: 0, fontSize: 18, color: "var(--color-navy-dark)" }}>
      Enter Player Names
    </h2>

    <input
      value={name1}
      onChange={(e) => setName1(e.target.value)}
      maxLength={50}
      placeholder="Player 1 name"
      style={{ padding: 8, borderRadius: 4, border: "1px solid var(--color-blue)" }}
    />
    <input
      value={name2}
      onChange={(e) => setName2(e.target.value)}
      maxLength={50}
      placeholder="Player 2 name"
      style={{ padding: 8, borderRadius: 4, border: "1px solid var(--color-blue)" }}
    />

    <button
      type="submit"
      style={{
        padding: "8px 16px",
        borderRadius: 6,
        border: "1px solid var(--color-mauve)",
        background: "var(--color-mauve)",
        color: "var(--color-navy-dark)",
        cursor: "pointer",
      }}
    >
      Start Game
    </button>
  </form>
</div>
  );
};

export default PlayerForm;