import { useState } from "react";
import {
  Formula,
  FormulaSmall,
  MathJaxContainer,
  Result,
  SizeInput,
  YoutubeEmbed,
} from "../Shared/Layout";
import { UseState } from "../Shared/UITypes";

const r = String.raw;

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
  const [boxWidth] = widthState;
  const [boxLength] = lengthState;
  const [boxHeight] = heightState;
  const sheetWidth = boxWidth + boxLength + 4 * boxHeight;
  return (
    <div>
      <h2 className="text-lg font-bold">Boîte Moda Masu</h2>
      <SizeInput title="Largeur de la boîte" state={widthState} />
      <SizeInput title="Longueur de la boîte" state={lengthState} />
      <SizeInput title="Hauteur de la boîte" state={heightState} />
      <div className="mt-4 formula-grid">
        <div>
          <Formula formula={r`largeur\_feuille = `} />
          <Formula formula={r`largeur\_boîte \times 2 + longueur\_boîte`} />
        </div>
        <Result value={sheetWidth} />
        <Formula formula={r`hauteur\_boîte = largeur\_boîte`} />
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
      <SizeInput
        title="Marge couvercle en largeur"
        state={[coverWidthMargin, setWidthMargin]}
      />
      <SizeInput
        title="Marge couvercle en longueur"
        state={[coverLengthMargin, setLengthMargin]}
      />
      <div className="mt-4 formula-grid">
        <FormulaSmall formula={r`largeur\_couvercle`} />
        <Result value={coverWith} />
        <FormulaSmall formula={r`longueur\_couvercle`} />
        <Result value={coverLength} />
        <FormulaSmall formula={r`hauteur\_couvercle = largeur\_couvercle`} />
        <Result value={coverWith} />
        <FormulaSmall
          formula={r`longueur\_feuille = largeur\_couvercle \times 4`}
        />
        <Result value={sheetLength} />
        <div>
          <FormulaSmall formula={r`largeur\_feuille = `} />
          <FormulaSmall
            formula={r`largeur\_couvercle \times 2 + longueur\_couvercle`}
          />
        </div>
        <Result value={sheetWidth} />
      </div>
    </div>
  );
}