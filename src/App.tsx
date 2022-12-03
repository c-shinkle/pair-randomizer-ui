import "./App.css";
import React, { useState } from "react";
import { getPairs } from "./get-pairs";

export interface Engineer {
  name: string;
  isGone: boolean;
  ownsStory: boolean;
}

const names = ["Christian", "Eric", "Jason", "Kyle", "Niko", "Tumsa", "Tyler"];

const defaultEngineers = names.map((name): Engineer => {
  return {
    name,
    isGone: false,
    ownsStory: false,
  };
});

export function App() {
  const [engineers, setEngineers] = useState(defaultEngineers);
  const [pairs, setPairs] = useState([] as string[]);

  const updateIsGoneAtIndex = (index: number) => {
    setEngineers((prev): Engineer[] => {
      const next = [...prev];
      next.splice(index, 1, {
        ...prev[index],
        isGone: !prev[index].isGone,
      });
      return next;
    });
  };

  const updateOwnsStoryAtIndex = (index: number) => {
    setEngineers((prev): Engineer[] => {
      const next = [...prev];
      next.splice(index, 1, {
        ...prev[index],
        ownsStory: !prev[index].ownsStory,
      });
      return next;
    });
  };

  const handleClick = () => {
    setPairs(getPairs(engineers));
  };

  return (
    <div className="App">
      <h1>Pair Randomizer</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gone?</th>
            <th>Story Owner?</th>
          </tr>
        </thead>
        <tbody>
          {names.map((name, index) => (
            <tr key={name}>
              <td>{name}</td>
              <td>
                <input
                  type={"checkbox"}
                  checked={engineers[index].isGone}
                  onChange={() => {
                    updateIsGoneAtIndex(index);
                  }}
                />
              </td>
              <td>
                <input
                  type={"checkbox"}
                  checked={engineers[index].ownsStory}
                  onChange={() => {
                    updateOwnsStoryAtIndex(index);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleClick}>Get Random Pairs!</button>
      <div>
        {pairs.map((pair) => (
          <p key={pair}>{pair}</p>
        ))}
      </div>
    </div>
  );
}
