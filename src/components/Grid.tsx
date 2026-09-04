import type { CardType } from "../types/card-type";

type GridProps = {
  cards: CardType[];
  handleClick: (index: number) => void;
};


export const Grid = ({ cards, handleClick }: GridProps) => {
  return (
    <div
        style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap:8
        }}
    >
        {cards.map((card,i)=>{
            const isRevealed = card.flipped || card.matched;
            const Icon = card.item;
            return(
               <button
                    key={card.id}
                    onClick={() => handleClick(i)}
                    style={{
                        aspectRatio: "1",
                        fontSize: 28,
                        borderRadius: 8,
                        border: `1px solid var(--color-blue)`,
                        background: isRevealed ? "var(--color-blush)" : "var(--color-slate)",
                        color: isRevealed ? "var(--color-navy-dark)" : "transparent",
                        cursor: isRevealed ? "default" : "pointer",
                    }}
                    >
                    {isRevealed ? <Icon size={28} /> : ""}
                    </button>
            )
        })}
    </div>
  )
}

export default Grid