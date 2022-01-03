import { MathJax } from "better-react-mathjax";
import { useState } from "react";
import { MathJaxContainer, Result, SizeInput, YoutubeEmbed } from "../Shared/Layout";
import { UseState } from "../Shared/UITypes";

export default function App() {
  const [boxWidth, setWidth] = useState(85);
  const [boxLength, setLength] = useState(130);
  const [boxHeigth, setHeight] = useState(10.5);
  return (
    <MathJaxContainer>
      <div className="fluid-container mt-4">
        <ModaMasuBox
          widthState={[boxWidth, setWidth]}
          lengthState={[boxLength, setLength]}
          heightState={[boxHeigth, setHeight]}
        />
        <ModaMasuCover boxWidth={boxWidth} boxLength={boxLength} />
        <YoutubeEmbed embedId="WYvvkrYawpk" className="max-w-4xl" />
      </div>
    </MathJaxContainer>
  );
}

function ModaMasuBox({
  widthState,
  lengthState,
  heightState,
}: {
  widthState: UseState;
  lengthState: UseState;
  heightState: UseState;
}) {
  const [boxWidth, setWidth] = widthState;
  const [boxLength, setLength] = lengthState;
  const [boxHeight, setHeight] = heightState;
  const sheetWidth = boxWidth + boxLength + 4 * boxHeight;
  return (
    <div>
      <h2 className="text-lg font-bold">Boîte Moda Masu</h2>
      <SizeInput title="Largeur de la boîte" state={widthState} />
      <SizeInput title="Longueur de la boîte" state={lengthState} />
      <SizeInput title="Hauteur de la boîte" state={heightState} />
      <div className="mt-4 formula-grid">
        <div>
          <MathJax>{"\\(largeur\\_feuille = \\)"}</MathJax>
          <MathJax>
            {"\\(largeur\\_boîte \\times 2 + longueur\\_boîte\\)"}
          </MathJax>
        </div>
        <Result value={sheetWidth} />
        <MathJax>{"\\(hauteur\\_boîte = largeur\\_boîte\\)"}</MathJax>
        <Result value={boxWidth} />
      </div>
    </div>
  );
}

function ModaMasuCover({
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
      <h2 className="text-lg font-bold">Couvercle Moda Masu</h2>
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
      <div className="mt-4 formula-grid">
        <MathJax>
          {"\\(\\small{longueur\\_feuille = largeur\\_couvercle \\times 4}\\)"}
        </MathJax>
        <Result value={sheetLength} />
        <div>
          <MathJax>{"\\(\\small{largeur\\_feuille = }\\)"}</MathJax>
          <MathJax>
            {
              "\\(\\small{largeur\\_couvercle \\times 2 + longueur\\_couvercle}\\)"
            }
          </MathJax>
        </div>
        <Result value={sheetWidth} />
        <MathJax>
          {"\\(\\small{hauteur\\_couvercle = largeur\\_couvercle}\\)"}
        </MathJax>
        <Result value={coverWith} />
      </div>
    </div>
  );
}
