import { useEffect, useState } from "react";
import DeckBuilder from "./DeckBuilder";
import Grid from "./Grid";
import PlayerForm from "./PlayerForm";


const MemoryGame = () => {

    const [cards,setCards] = useState(DeckBuilder());
    const [selected,setSelected] = useState<number[]>([]);
    const [turn,setTurn] = useState(0);
    const [players, setPlayers] = useState(["Player 1", "Player 2"]);
    const [showForm, setShowForm] = useState(true);

    const won = cards.every((c) => c.matched);

    useEffect(()=>{
        if(selected.length !== 2) return;
        
        const [first,second] = selected;    

        if(cards[first].item === cards[second].item){
            setCards((prev)=>prev.map((c,i) => (i===first || i===second ? {...c,matched:true} : c)));
            setSelected([])
        }else{
            const timer = setTimeout(() => {
               setCards((prev) => prev.map((c)=>({...c,flipped:false,matched:false}))) 
               setSelected([])
               setTurn((prev)=>(prev+1) % players.length)
            }, 700);
            return () => clearTimeout(timer)
        }
    },[selected,cards]);


    function handleClick(index:number){
        if (selected.length === 2) return;
        if (cards[index].flipped || cards[index].matched) return;
        setCards((prev) => prev.map((c,i) => (i === index ? {...c, flipped:true}:c)));
        setSelected((prev) => [...prev, index]);
    }

    function reset() {
        if (!window.confirm("Reset the game? Current progress will be lost.")) return;
        setCards(DeckBuilder());
        setSelected([]);
        setTurn(0);
    }
    
    return (
        <div style={{ maxWidth: 420, margin: "30px auto", textAlign: "center" }}>
  <h1 style={{ marginBottom: 2, color: "var(--color-blush)" }}>Memory Match</h1>

  <p style={{ color: "var(--color-blush)",fontSize:"20px" }}>
    {won ? `${players[turn]} wins! 🎉` : `${players[turn]}'s turn`}
  </p>

  <Grid cards={cards} handleClick={handleClick} />

  <button
    onClick={reset}
    style={{
      marginTop: 20,
      padding: "8px 16px",
      borderRadius: 6,
      border: "1px solid var(--color-mauve)",
      background: "var(--color-mauve)",
      color: "var(--color-navy-dark)",
      cursor: "pointer",
    }}
  >
    Reset
  </button>

  {showForm && (
    <PlayerForm onSubmit={(names) => setPlayers(names)} onClose={() => setShowForm(false)} />
  )}
</div>
    )
}

export default MemoryGame