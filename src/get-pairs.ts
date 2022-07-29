import { Engineer } from "./App";

export const getPairs = (allEngineers: Engineer[]): string[] => {
  const ownerSet = allEngineers.filter((engineer) => engineer.ownsStory);

  const freeEngineers = allEngineers.filter(
    (engineer) => !engineer.isGone && !engineer.ownsStory
  );

  const pairs = ownerSet.map(
    (owner) => `${owner.name} + ${sampleNoReplace(freeEngineers).name}`
  );

  while (freeEngineers.length >= 2) {
    pairs.push(
      ` ${sampleNoReplace(freeEngineers).name} + ${
        sampleNoReplace(freeEngineers).name
      }`
    );
  }

  if (freeEngineers.length === 1) {
    pairs.push(`${freeEngineers[0].name} is on his own!`);
  }

  return pairs;
};

export function sampleNoReplace<T>(arr: T[]): T {
  const index = Math.floor(Math.random() * arr.length);
  const sample = arr[index];
  arr.splice(index, 1);
  return sample;
}
