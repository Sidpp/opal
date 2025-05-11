"use client";

import Slider from "./data/slider";
import Text from "./data/text";

export default function Home() {
  return (
    <main className={`relative h-screen w-screen overflow-hidden`}>
      <Slider />
      <Text />
    </main>
  );
}
