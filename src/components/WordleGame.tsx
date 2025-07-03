import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { RotateCcw, Trophy, X } from 'lucide-react';

const animalList = [
  'lion', 'bear', 'wolf', 'frog', 'toad', 'crab', 'mule', 'hare', 'kite', 'boar',
  'lynx', 'tern', 'clam', 'crow', 'dodo', 'fowl', 'gnat', 'ibis', 'puma', 'rhea'
];

const getRandomAnimal = () => {
  const idx = Math.floor(Math.random() * animalList.length);
  return animalList[idx];
};

const MAX_ATTEMPTS = 6;

const WordleGame = ({ isOpen = false, onClose }: { isOpen?: boolean; onClose?: () => void }) => {
  const [answer, setAnswer] = useState<string>(getRandomAnimal());
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const [status, setStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    if (guesses.length === 0) setMessage('');
    if (guesses.length > 0 && guesses[guesses.length - 1] === answer) {
      setStatus('won');
      setMessage(`🎉 Correct! The animal was "${answer.toUpperCase()}".`);
    } else if (guesses.length >= MAX_ATTEMPTS) {
      setStatus('lost');
      setMessage(`❌ Out of attempts! The animal was "${answer.toUpperCase()}".`);
    }
  }, [guesses, answer]);

  const resetGame = () => {
    setAnswer(getRandomAnimal());
    setGuesses([]);
    setCurrentGuess('');
    setStatus('playing');
    setMessage('');
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement> | string) => {
    if (status !== 'playing') return;
    
    // Handle string input from virtual keyboard
    if (typeof e === 'string') {
      if (e === 'ENTER') {
        handleGuess();
        return;
      } else if (e === 'BACKSPACE') {
        setCurrentGuess(prev => prev.slice(0, -1));
        return;
      } else if (e.length === 1) {
        setCurrentGuess(prev => {
          if (prev.length < 4) {
            return prev + e.toLowerCase();
          }
          return prev;
        });
        return;
      }
    } else {
      // Handle regular input event
      const value = e.target.value.toLowerCase();
      if (value.length <= 4 && /^[a-z]*$/.test(value)) {
        setCurrentGuess(value);
      }
    }
  };

  const handleGuess = () => {
    if (currentGuess.length !== 4) {
      setMessage('Enter a 4-letter animal name.');
      return;
    }
    if (!animalList.includes(currentGuess)) {
      setMessage('Not a valid animal');
      return;
    }
    if (guesses.includes(currentGuess)) {
      setMessage('You already guessed that animal.');
      return;
    }
    setGuesses([...guesses, currentGuess]);
    setCurrentGuess('');
  };

  // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === 'Enter') handleGuess();
  // };

  const getCellStatus = (guess: string, position: number) => {
    if (!guess) return 'default';
    
    const letter = guess[position];
    if (!letter) return 'default';
    
    if (letter === answer[position]) return 'correct';
    if (answer.includes(letter)) return 'present';
    return 'absent';
  };

  const keyboard = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE']
  ];

  const getKeyStatus = (key: string) => {
    const lowerKey = key.toLowerCase();
    let status = 'default';
    
    for (const guess of guesses) {
      for (let i = 0; i < guess.length; i++) {
        if (guess[i] === lowerKey) {
          if (guess[i] === answer[i]) return 'correct';
          if (answer.includes(guess[i])) status = 'present';
          else if (status !== 'present') status = 'absent';
        }
      }
    }
    return status;
  };

  return (
    <>
      {/* Only render modal if isOpen is true */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-md w-full shadow-2xl border border-gray-200 dark:border-gray-700"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Guess the 4 letter Word Animal</h3>
                <div className="flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={resetGame}
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-neon-cyan dark:hover:text-neon-cyan transition-colors duration-200"
                  >
                    
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors duration-200"
                  >
                   
                  </motion.button>
                </div>
              </div>

              {/* Game Status */}
              {status !== 'playing' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center mb-4 p-3 rounded-lg ${
                    status === 'won' 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                      : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                  }`}
                >
                  {status === 'won' ? '🎉 Congratulations!' : `😔 Game Over!`}
                </motion.div>
              )}

              {/* Game Grid */}
              <div className="grid grid-rows-6 gap-2 mb-6">
                {Array.from({ length: MAX_ATTEMPTS }).map((_, rowIndex) => (
                  <div key={rowIndex} className="grid grid-cols-4 gap-2">
                    {Array.from({ length: 4 }).map((_, colIndex) => {
                      const guess = guesses[rowIndex];
                      const isCurrentRow = rowIndex === guesses.length && status === 'playing';
                      const letter = guess ? guess[colIndex] : (isCurrentRow && currentGuess[colIndex] ? currentGuess[colIndex] : '');
                      const cellStatus = guess ? getCellStatus(guess, colIndex) : 'default';

                      return (
                        <motion.div
                          key={colIndex}
                          initial={{ scale: 0.8 }}
                          animate={{ scale: letter ? 1 : 0.9 }}
                          className={`w-12 h-12 border-2 rounded-lg flex items-center justify-center text-lg font-bold uppercase ${
                            cellStatus === 'correct' 
                              ? 'bg-neon-green/80 border-neon-green text-white'
                              : cellStatus === 'present'
                              ? 'bg-yellow-400/80 border-yellow-400 text-white'
                              : cellStatus === 'absent'
                              ? 'bg-gray-500 border-gray-500 text-white'
                              : 'border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white'
                          }`}
                        >
                          {letter}
                        </motion.div>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Virtual Keyboard */}
              <div className="space-y-2">
                {keyboard.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex justify-center gap-1">
                    {row.map((key) => {
                      const keyStatus = getKeyStatus(key.toLowerCase());
                      return (
                        <motion.button
                          key={key}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleInput(key)}
                          disabled={status !== 'playing'}
                          className={`px-2 py-2 rounded font-bold text-sm ${
                            key === 'ENTER' || key === 'BACKSPACE' ? 'px-3' : ''
                          } ${
                            keyStatus === 'correct'
                              ? 'bg-neon-green text-white'
                              : keyStatus === 'present'
                              ? 'bg-yellow-400 text-white'
                              : keyStatus === 'absent'
                              ? 'bg-gray-500 text-white'
                              : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                          } transition-colors duration-200 disabled:opacity-50`}
                        >
                          {key === 'BACKSPACE' ? '⌫' : key}
                        </motion.button>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Message */}
              {message && (
                <div className="text-center text-sm mb-2 text-neon-purple">{message}</div>
              )}

              {/* Play Again Button */}
              {(status === 'won' || status === 'lost') && (
                <button
                  onClick={resetGame}
                  className="w-full mt-2 px-3 py-2 rounded bg-neon-purple text-white font-semibold hover:bg-neon-purple/80"
                >
                  Play Again
                </button>
              )}

              {/* Animal List */}
              {/* <details className="mt-2 text-xs text-gray-500">
                <summary className="cursor-pointer">Show animal list</summary>
                <div className="flex flex-wrap gap-1 mt-1">
                  {animalList.map(animal => (
                    <span key={animal} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">{animal}</span>
                  ))}
                </div>
              </details> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WordleGame;