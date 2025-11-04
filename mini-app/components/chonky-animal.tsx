"use client";

import { useState, useEffect } from "react";
import Share from "@/components/share";
import { url } from "@/lib/metadata";

const animals = [
  "Chonky Cat",
  "Chonky Dog",
  "Chonky Elephant",
  "Chonky Giraffe",
  "Chonky Panda",
  "Chonky Koala",
  "Chonky Sloth",
  "Chonky Turtle",
  "Chonky Penguin",
  "Chonky Bear",
];

export default function ChonkyAnimal() {
  const [animal, setAnimal] = useState<string>("");

  useEffect(() => {
    const random = animals[Math.floor(Math.random() * animals.length)];
    setAnimal(random);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-semibold">{animal}</h2>
      <Share text={`I got a ${animal} from Chonky Animal App! ${url}`} />
    </div>
  );
}
