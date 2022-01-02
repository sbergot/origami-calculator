import { MathJax } from "better-react-mathjax";
import { useState } from "react";
import { MathJaxContainer, YoutubeEmbed } from "../Layout";
import baggiUrl from "../../baggi.svg";
import baggiLegendUrl from "../../baggi_legend.svg";

export default function App() {
  return (
    <MathJaxContainer>
      <div className="mt-4">
        <BaggiBox />
      </div>
    </MathJaxContainer>
  );
}

function formatResult(x: number): string {
  return (Math.round(x * 100) / 100).toString();
}

function BaggiBox() {
  const [boxWidth, setWidth] = useState(41);
  const [boxLength, setLength] = useState(70);
  const sheetLength = boxWidth * 4;
  const sheetWidth = boxWidth * 2 + boxLength;
  return (
    <>
      <h2 className="text-lg font-bold">Boîte Baggi</h2>
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
          <div>
            <p>Longueur de la boîte</p>
            <input
              type="number"
              className="border px-2"
              value={boxLength}
              onChange={(e) => setLength(parseInt(e.currentTarget.value))}
            />
          </div>
          <div className="mt-4 grid grid-cols-2fc">
            <MathJax style={{ display: "inline-block" }}>
              {"\\(longueur\\_feuille = largeur\\_boîte \\times 4\\)"}
            </MathJax>
            <span className="ml-2">=&nbsp;{formatResult(sheetLength)}</span>
            <div className="mt-1">
              <MathJax style={{ display: "inline-block" }}>
                {"\\(largeur\\_feuille\\)"}
              </MathJax>
              <MathJax style={{ display: "inline-block" }}>
                {"\\(= largeur\\_boîte \\times 2 + longueur\\_boîte\\)"}
              </MathJax>
            </div>
            <span className="ml-2 self-end">=&nbsp;{formatResult(sheetWidth)}</span>
            <MathJax style={{ display: "inline-block" }} className="mt-2">
              {"\\(hauteur\\_boîte = largeur\\_boîte\\)"}
            </MathJax>
            <span className="ml-2">=&nbsp;{formatResult(boxWidth)}</span>
          </div>
        </div>
        <YoutubeEmbed embedId="ZdtQVv-AxR0" />
        <div className="w-full max-w-sm">
          <img src={baggiUrl} />
        </div>
        <div className="w-full max-w-sm">
          <img src={baggiLegendUrl} />
        </div>
      </div>
    </>
  );
}
