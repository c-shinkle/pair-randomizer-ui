import "./App.css";
import { useState } from "react";
import { getPairs } from "./get-pairs";

export interface Engineer {
  name: string;
  isGone: boolean;
  ownsStory: boolean;
}

const names = [
  "Christian",
  "Eric",
  "Girish",
  "Jason",
  "Kyle",
  "Niko",
  "Tumsa",
  "Tyler",
];

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
    setEngineers((previousEngineers): Engineer[] => {
      const engineerToChange = previousEngineers[index];
      return Object.assign([], previousEngineers, {
        [index]: {
          ...engineerToChange,
          isGone: !engineerToChange.isGone,
        },
      });
    });
  };

  const updateOwnsStoryAtIndex = (index: number) => {
    setEngineers((previousEngineers): Engineer[] => {
      const engineerToChange = previousEngineers[index];
      return Object.assign([], previousEngineers, {
        [index]: {
          ...engineerToChange,
          ownsStory: !engineerToChange.ownsStory,
        },
      });
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
      <button onClick={handleClick}>Big Submit Button</button>
      <div>
        {pairs.map((pair) => (
          <p key={pair}>{pair}</p>
        ))}
      </div>
    </div>
  );
}
