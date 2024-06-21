import { useState } from 'react';
import Confetti from 'react-confetti';
import './App.css';
import minJae from './assets/minjae.svg';

function App() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const confettiSource = { x: width / 2, y: height * 9 / 10, w: 0, h: 0 };
  const initialVelocityY = { min: -10, max: -20 };
  const initialVelocityX = { min: -8, max: 8 };

  const [runConfetti, setRunConfetti] = useState(false);

  const handleConfetti = () => {
    if (!runConfetti) {
    setRunConfetti(true);
    setTimeout(() => {
      setRunConfetti(false);
    }, 7000); 
    }
  };

  return (
    <div className="App">
      {runConfetti && (
        <Confetti
          width={width}
          height={height}
          drawShape={(ctx) => {
            ctx.beginPath();
            for (let i = 0; i < 22; i++) {
              const angle = 0.35 * i;
              const x = (0.2 + 1.5 * angle) * Math.cos(angle);
              const y = (0.2 + 1.5 * angle) * Math.sin(angle);
              ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.closePath();
          }}
          recycle={false}
          confettiSource={confettiSource}
          initialVelocityY={initialVelocityY}
          initialVelocityX={initialVelocityX}
        />
      )}
      <img className='minjae' src={minJae} alt="Minjae" onClick={handleConfetti} />
      <div className='block'/>
    </div>
  );
}

export default App;
