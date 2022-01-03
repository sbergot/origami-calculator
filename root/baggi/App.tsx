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
import baggiUrl from "./baggi.svg";
import baggiLegendUrl from "./baggi_legend.svg";

const r = String.raw;

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
        <YoutubeEmbed embedId="ZdtQVv-AxR0" className="max-w-4xl" />
      </div>
    </MathJaxContainer>
  );
}

function BaggiBox({
  widthState,
  lengthState,
}: {
  widthState: UseState;
  lengthState: UseState;
}) {
  const [boxWidth] = widthState;
  const [boxLength] = lengthState;
  const sheetLength = boxWidth * 4;
  const sheetWidth = boxWidth * 2 + boxLength;
  return (
    <div>
      <h2 className="text-lg font-bold">Boîte Baggi</h2>
      <SizeInput title="Largeur de la boîte" state={widthState} />
      <SizeInput title="Longueur de la boîte" state={lengthState} />
      <div className="mt-4 formula-grid">
        <Formula formula={r`longueur\_feuille = largeur\_boîte \times 4`} />
        <Result value={sheetLength} />
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
  const sheetWidth = coverLength + 2 * coverWith;
  return (
    <div>
      <h2 className="text-lg font-bold">Couvercle Baggi</h2>
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
