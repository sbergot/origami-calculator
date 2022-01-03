import { MathJax } from "better-react-mathjax";
import { useState } from "react";
import { MathJaxContainer, SizeInput, YoutubeEmbed } from "../Shared/Layout";

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

function formatResult(x: number): string {
  return (Math.round(x * 100) / 100).toString();
}

function MasuBox() {
  const [boxWidth, setWidth] = useState(49);
  const sheetWidth = (boxWidth / Math.sqrt(2)) * 4;
  return (
    <div>
      <h2 className="text-lg font-bold">Boîte Masu</h2>
      <SizeInput title="Largeur de la boîte" state={[boxWidth, setWidth]} />
      <div className="mt-4 grid grid-cols-2fc gap-2">
        <MathJax>
          {
            "\\(largeur\\_feuille = \\frac{largeur\\_boîte \\times 4}{\\sqrt{2}}\\)"
          }
        </MathJax>
        <span>=&nbsp;{formatResult(sheetWidth)}</span>
        <MathJax>
          {"\\(hauteur\\_boîte = \\frac{largeur\\_boîte}{2}\\)"}
        </MathJax>
        <span>=&nbsp;{formatResult(boxWidth / 2)}</span>
      </div>
    </div>
  );
}

function Divisor1() {
  const [boxWidth, setWidth] = useState(4);
  const sheetWidth = boxWidth * 3;
  return (
    <div>
      <h2 className="text-lg font-bold">Diviseur en +</h2>
      <SizeInput title="Largeur du diviseur" state={[boxWidth, setWidth]} />
      <div className="mt-4 grid grid-cols-2fc gap-2">
        <MathJax>
          {"\\(largeur\\_feuille = largeur\\_diviseur \\times 3\\)"}
        </MathJax>
        <span>=&nbsp;{formatResult(sheetWidth)}</span>
      </div>
    </div>
  );
}

function Divisor2() {
  const [boxWidth, setWidth] = useState(4);
  const sheetWidth = boxWidth * (4 / Math.sqrt(2));
  return (
    <div>
      <h2 className="text-lg font-bold">Diviseur en X</h2>
      <SizeInput title="Largeur du diviseur" state={[boxWidth, setWidth]} />
      <div className="mt-4 grid grid-cols-2fc gap-2">
        <MathJax>
          {
            "\\(largeur\\_feuille = \\frac{largeur\\_boîte \\times 4}{\\sqrt{2}}\\)"
          }
        </MathJax>
        <span>=&nbsp;{formatResult(sheetWidth)}</span>
      </div>
    </div>
  );
}
