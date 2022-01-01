import { MathJax } from "better-react-mathjax";
import { useState } from "react";
import { MathJaxContainer, YoutubeEmbed } from "../Layout";

export default function App() {
  return (
    <MathJaxContainer>
      <div className="mt-4">
        <MasuBox />
        <Divisor1 />
        <Divisor2 />
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
    <>
      <h2 className="text-lg">Boîte Masu</h2>
      <div className="fluid-container">
        <div>
          <div>
            <p>Largeur de la boîte</p>
            <input
              type="number"
              className="border px-2"
              value={boxWidth}
              onChange={(e) => setWidth(parseInt(e.currentTarget.value))}
            />
          </div>
          <div className="mt-4 grid grid-cols-2fc">
            <MathJax style={{ display: "inline-block" }}>
              {
                "\\(largeur\\_feuille = \\frac{largeur\\_boîte \\times 4}{\\sqrt{2}}\\)"
              }
            </MathJax>
            <span className="ml-2">= {formatResult(sheetWidth)}</span>
            <MathJax style={{ display: "inline-block" }} className="mt-2">
              {"\\(hauteur\\_boîte = \\frac{largeur\\_boîte}{2}\\)"}
            </MathJax>
            <span className="ml-2">= {formatResult(boxWidth / 2)}</span>
          </div>
        </div>
        <div>
          <YoutubeEmbed embedId="V2q5CyjfEKs" />
        </div>
      </div>
    </>
  );
}

function Divisor1() {
  const [boxWidth, setWidth] = useState(4);
  const sheetWidth = boxWidth * 3;
  return (
    <div className="mt-4">
      <h2 className="text-lg">Diviseur en +</h2>
      <div className="fluid-container">
        <div>
          <div>
            <p>Largeur du diviseur</p>
            <input
              type="number"
              className="border px-2"
              value={boxWidth}
              onChange={(e) => setWidth(parseInt(e.currentTarget.value))}
            />
          </div>
          <div className="mt-4 grid grid-cols-2fc">
            <MathJax style={{ display: "inline-block" }}>
              {"\\(largeur\\_feuille = largeur\\_diviseur \\times 3\\)"}
            </MathJax>
            <span className="ml-2">= {formatResult(sheetWidth)}</span>
          </div>
        </div>
        <div>
          <YoutubeEmbed embedId="8r0MMfT0b2I" />
        </div>
      </div>
    </div>
  );
}

function Divisor2() {
  const [boxWidth, setWidth] = useState(4);
  const sheetWidth = boxWidth * (4 / Math.sqrt(2));
  return (
    <div className="mt-4">
      <h2 className="text-lg">Diviseur en X</h2>
      <div className="fluid-container">
        <div>
          <div>
            <p>Largeur du diviseur</p>
            <input
              type="number"
              className="border px-2"
              value={boxWidth}
              onChange={(e) => setWidth(parseInt(e.currentTarget.value))}
            />
          </div>
          <div className="mt-4 grid grid-cols-2fc">
            <MathJax style={{ display: "inline-block" }}>
              {
                "\\(largeur\\_feuille = \\frac{largeur\\_boîte \\times 4}{\\sqrt{2}}\\)"
              }
            </MathJax>
            <span className="ml-2">= {formatResult(sheetWidth)}</span>
          </div>
        </div>
        <div>
          <YoutubeEmbed embedId="TkEIyBQ1xic" />
        </div>
      </div>
    </div>
  );
}
