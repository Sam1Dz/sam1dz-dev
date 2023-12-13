import heroData from '../data/dynamic-hero.json';

export type TDynamicHero = {
  src: string;
  alt: string;
};

export default function GetDynamicHero() {
  const data = heroData.data;
  return data[Math.floor(Math.random() * data.length)];
}
