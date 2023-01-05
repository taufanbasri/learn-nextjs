"use client";

import React, { useState } from "react";

const Calculator = () => {
  const [angka1, setAngka1] = useState(0);
  const [angka2, setAngka2] = useState(0);
  const [hasil, setHasil] = useState(0);

  return (
    <div>
      <form>
        <input
          placeholder="Angka 1"
          value={angka1}
          onChange={(e) => setAngka1(Number(e.target.value))}
        />
        <input
          placeholder="Angka 2"
          value={angka2}
          onChange={(e) => setAngka2(Number(e.target.value))}
        />

        <button type="button" onClick={() => setHasil(angka1 + angka2)}>
          Hitung
        </button>

        <p>Hasil: {hasil}</p>
      </form>
    </div>
  );
};

export default Calculator;
