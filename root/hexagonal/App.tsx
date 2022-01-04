import { useState } from "react";
import {
  formatResult,
  Link,
  MathJaxContainer,
  SizeInput,
  YoutubeEmbed,
} from "../Shared/Layout";
import { UseState } from "../Shared/UITypes";
import hexagonalUrl from "./hexagonal.svg";
import diagonalUrl from "./diagonal.svg";

export default function App() {
  const [boxDiagonal, setDiagonal] = useState(4);
  const [boxHeight, setHeight] = useState(3);
  return (
    <MathJaxContainer>
      <div className="fluid-container mt-4">
        <HexaBox
          diagState={[boxDiagonal, setDiagonal]}
          heightState={[boxHeight, setHeight]}
        />
        <div className="w-full max-w-md">
          <img src={hexagonalUrl} />
        </div>
        <HexaCover boxDiag={boxDiagonal} boxHeight={boxHeight} />
        <div className="w-full max-w-sm">
          <img src={diagonalUrl} />
        </div>
        <YoutubeEmbed embedId="qh6mEO4zEV4" className="max-w-4xl" />
        <YoutubeEmbed embedId="glH2XLipqUg" className="max-w-4xl" />
      </div>
    </MathJaxContainer>
  );
}

function HexaBox({
  diagState,
  heightState,
}: {
  diagState: UseState;
  heightState: UseState;
}) {
  const [diag] = diagState;
  const [height] = heightState;
  const sheetLength = 2 * height + (diag * Math.sqrt(3)) / 2;
  return (
    <div>
      <h2 className="text-lg font-bold">Boîte hexagonale</h2>
      <SizeInput title="Hauteur" state={heightState} />
      <SizeInput title="Grande diagonale" state={diagState} />
      <div>Longueur de la feuille: {formatResult(sheetLength)}</div>
      <div>Largeur de la feuille: {(diag * 3) / 2}</div>
      <div>m1: {diag / 2}</div>
      <div>m2: {height}</div>
      <div>m3: {formatResult(sheetLength - 2 * height)}</div>
    </div>
  );
}

function HexaCover({
  boxDiag,
  boxHeight,
}: {
  boxDiag: number;
  boxHeight: number;
}) {
  const [diagonalMargin, setDiagonalMargin] = useState(4);
  const [heightMargin, setHeightMargin] = useState(3);
  const height = boxHeight - heightMargin;
  const diag = boxDiag + diagonalMargin;
  const sheetLength = 2 * height + (diag * Math.sqrt(3)) / 2;
  return (
    <div>
      <h2 className="text-lg font-bold">Couvercle boîte hexagonale</h2>
      <SizeInput
        title="Marge couvercle en hauteur"
        state={[heightMargin, setHeightMargin]}
      />
      <SizeInput
        title="Marge couvercle en diagonale"
        state={[diagonalMargin, setDiagonalMargin]}
      />
      <div>Longueur de la feuille: {formatResult(sheetLength)}</div>
      <div>Largeur de la feuille: {(diag * 3) / 2}</div>
      <div>m1: {diag / 2}</div>
      <div>m2: {height}</div>
      <div>m3: {formatResult(sheetLength - 2 * height)}</div>
    </div>
  );
}