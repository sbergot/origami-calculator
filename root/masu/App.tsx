import { useState } from "react";
import {
  Formula,
  MathJaxContainer,
  Result,
  SizeInput,
  Subtitle,
  YoutubeEmbed,
} from "../Shared/Components";

const r = String.raw;

export default function App() {
  return (
    <MathJaxContainer>
      <div className="fluid-container mt-4">
        <MasuBox />
        <YoutubeEmbed embedId="V2q5CyjfEKs" className="max-w-md" />
        <Divisor1 />
        <YoutubeEmbed embedId="8r0MMfT0b2I" className="max-w-md" />
        <Divisor2 />
        <YoutubeEmbed embedId="TkEIyBQ1xic" className="max-w-md" />
      </div>
    </MathJaxContainer>
  );
}

function MasuBox() {
  const [boxWidth, setWidth] = useState(49);
  const sheetWidth = (boxWidth / Math.sqrt(2)) * 4;
  return (
    <div>
      <Subtitle>Boîte Masu</Subtitle>
      <SizeInput title="Largeur de la boîte" state={[boxWidth, setWidth]} />
      <div className="mt-4 formula-grid">
        <Formula
          formula={r`largeur\_feuille = \frac{largeur\_boîte \times 4}{\sqrt{2}}`}
        />
        <Result value={sheetWidth} />
        <Formula formula={r`hauteur\_boîte = \frac{largeur\_boîte}{2}`} />
        <Result value={boxWidth / 2} />
      </div>
    </div>
  );
}

function Divisor1() {
  const [boxWidth, setWidth] = useState(4);
  const sheetWidth = boxWidth * 3;
  return (
    <div>
      <Subtitle>Diviseur en +</Subtitle>
      <SizeInput title="Largeur du diviseur" state={[boxWidth, setWidth]} />
      <div className="mt-4 formula-grid">
        <Formula formula={r`largeur\_feuille = largeur\_diviseur \times 3`} />
        <Result value={sheetWidth} />
      </div>
    </div>
  );
}

function Divisor2() {
  const [boxWidth, setWidth] = useState(4);
  const sheetWidth = boxWidth * (4 / Math.sqrt(2));
  return (
    <div>
      <Subtitle>Diviseur en X</Subtitle>
      <SizeInput title="Largeur du diviseur" state={[boxWidth, setWidth]} />
      <div className="mt-4 formula-grid">
        <Formula
          formula={r`largeur\_feuille = \frac{largeur\_boîte \times 4}{\sqrt{2}}`}
        />
        <Result value={sheetWidth} />
      </div>
    </div>
  );
}
