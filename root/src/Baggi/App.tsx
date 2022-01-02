import { MathJax } from "better-react-mathjax";
import { useState } from "react";
import { MathJaxContainer, YoutubeEmbed } from "../Layout";
import baggiUrl from "../../baggi.svg";
import baggiLegendUrl from "../../baggi_legend.svg";

const dummy = () => useState<number>(0);
type UseState = ReturnType<typeof dummy>;

export default function App() {
  const [boxWidth, setWidth] = useState(41);
  const [boxLength, setLength] = useState(70);
  return (
    <MathJaxContainer>
      <div className="fluid-container mt-4">
        <BaggiBox
          widthState={[boxWidth, setWidth]}
          lengthState={[boxLength, setLength]}
        />
        <BaggiCover boxWidth={boxWidth} boxLength={boxLength} />
        <div className="w-full max-w-sm">
          <img src={baggiUrl} />
        </div>
        <div className="w-full max-w-sm">
          <img src={baggiLegendUrl} />
        </div>
        <YoutubeEmbed embedId="ZdtQVv-AxR0" />
      </div>
    </MathJaxContainer>
  );
}

function formatResult(x: number): string {
  return (Math.round(x * 100) / 100).toString();
}

function BaggiBox({
  widthState,
  lengthState,
}: {
  widthState: UseState;
  lengthState: UseState;
}) {
  const [boxWidth, setWidth] = widthState;
  const [boxLength, setLength] = lengthState;
  const sheetLength = boxWidth * 4;
  const sheetWidth = boxWidth * 2 + boxLength;
  return (
    <div>
      <h2 className="text-lg font-bold">Boîte Baggi</h2>
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
  );
}

function BaggiCover({
  boxWidth,
  boxLength,
}: {
  boxWidth: number;
  boxLength: number;
}) {
  const [coverWidthMargin, setWidthMargin] = useState(2);
  const [coverLengthMargin, setLengthMargin] = useState(2);
  const coverWith = boxWidth + coverWidthMargin;
  const coverLength = boxLength + coverLengthMargin;
  const sheetLength = coverWith * 4;
  const sheetWidth = coverLength * 2 + boxLength;
  return (
    <div>
      <h2 className="text-lg font-bold">Couvercle Baggi</h2>
      <div>
        <p>Marge couvercle en largeur</p>
        <input
          type="number"
          className="border px-2"
          value={coverWidthMargin}
          onChange={(e) => setWidthMargin(parseInt(e.currentTarget.value))}
        />
      </div>
      <div>
        <p>Marge couvercle en longueur</p>
        <input
          type="number"
          className="border px-2"
          value={coverLengthMargin}
          onChange={(e) => setLengthMargin(parseInt(e.currentTarget.value))}
        />
      </div>
      <div className="mt-4 grid grid-cols-2fc">
        <MathJax style={{ display: "inline-block" }}>
          {"\\(longueur\\_feuille = largeur\\_couvercle \\times 4\\)"}
        </MathJax>
        <span className="ml-2">=&nbsp;{formatResult(sheetLength)}</span>
        <div className="mt-1">
          <MathJax style={{ display: "inline-block" }}>
            {"\\(largeur\\_feuille\\)"}
          </MathJax>
          <MathJax style={{ display: "inline-block" }}>
            {"\\(= largeur\\_couvercle \\times 2 + longueur\\_couvercle\\)"}
          </MathJax>
        </div>
        <span className="ml-2 self-end">=&nbsp;{formatResult(sheetWidth)}</span>
        <MathJax style={{ display: "inline-block" }} className="mt-2">
          {"\\(hauteur\\_couvercle = largeur\\_couvercle\\)"}
        </MathJax>
        <span className="ml-2">=&nbsp;{formatResult(boxWidth)}</span>
      </div>
    </div>
  );
}
