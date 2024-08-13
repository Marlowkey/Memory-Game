/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

import { useState, useEffect } from "react";
import FetchCharacters from "./FetchCharacters";
import Header from "./Header";
import Modal from "./Modal";

export const Card = () => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchCharacters = async () => {
      const characters = await FetchCharacters();
      setCards(characters.slice(0, 8));
    };
    fetchCharacters();
  }, []);

  const shuffleCards = () => {
    const shuffledCards = cards.sort(() => Math.random() - 0.7);
    setCards(shuffledCards);
  };
  const handleCardClick = (id) => {
    if (selectedCards.includes(id)) {
      setScore(0);
      setSelectedCards([]);
      setResult("You lost! Try again!");
    } else {
      const newSelectedCards = [...selectedCards, id];
      setSelectedCards(newSelectedCards);
      const newScore = score + 1;
      setScore(newScore);
  
      if (newSelectedCards.length === cards.length) {
        setResult("You beat the game!");
        setScore(0);
        setSelectedCards([]);
      }
  
      if (newScore > bestScore) {
        setBestScore(newScore);
      }
    }
  
    shuffleCards();
  };

  return (
    <div className="bg-[url('https://i.ibb.co/4NnNQYD/bg.png')] bg-cover p-8">
      <Header score={score} bestScore={bestScore} />
      {result && <Modal result={result} closeModal={() => setResult("")} />}
      <div className="grid grid-cols-2 gap-2 justify-items-center lg:grid-cols-4 lg:gap-4">
        {cards.map((char) => (
          <div
            key={char.id}
            onClick={() => handleCardClick(char.id)}
            class="w-3/4 h-full m-full min-w-full min-h-full bg-gray-950 bg-opacity-80 rounded-2xl shadow-2xl overflow-hidden"
          >
            <img
              class="p-2 rounded-2xl w-full h-full object-cover object-center"
              src={char.imageUrl}
              alt={char.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
