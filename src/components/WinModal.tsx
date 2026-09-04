import { Trophy } from "lucide-react";

type WinModalProps = {
  winner: string;
  onPlayAgain: () => void;
};

const WinModal = ({ winner, onPlayAgain }: WinModalProps) => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(13, 21, 33, 0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
      }}
    >
      <div
        style={{
          background: "linear-gradient(160deg, var(--color-navy-dark), var(--color-slate))",
          border: "1px solid var(--color-mauve)",
          borderRadius: 16,
          padding: "40px 32px",
          width: 300,
          textAlign: "center",
          boxShadow: "0 0 40px rgba(195, 142, 180, 0.4)",
          animation: "popIn 0.35s ease-out",
        }}
      >
        <Trophy size={48} color="var(--color-mauve)" style={{ marginBottom: 12 }} />

        <h2
          style={{
            margin: "0 0 4px",
            color: "var(--color-blush)",
            fontSize: 22,
          }}
        >
          {winner} Wins!
        </h2>

        <p style={{ color: "var(--color-blue)", margin: "0 0 24px", fontSize: 14 }}>
          Every pair found. Well played.
        </p>

        <button
          onClick={onPlayAgain}
          style={{
            padding: "10px 24px",
            borderRadius: 8,
            border: "none",
            background: "var(--color-mauve)",
            color: "var(--color-navy-dark)",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default WinModal;