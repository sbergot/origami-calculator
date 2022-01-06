import { useState } from "react";
import {
  formatResult,
  MarkList,
  MathJaxContainer,
  Result,
  SizeInput,
  Subtitle,
  YoutubeEmbed,
} from "../Shared/Components";
import { UseState } from "../Shared/UITypes";
import vPouchUrl from "./v-pouch.svg";

export default function App() {
  const [boxWidth, setWidth] = useState(59);
  const [boxThickness, setThickness] = useState(3.5);
  const [grammage, setGrammage] = useState(190);
  return (
    <MathJaxContainer>
      <div className="fluid-container mt-4">
        <VPouch
          widthState={[boxWidth, setWidth]}
          thicknessState={[boxThickness, setThickness]}
          grammageState={[grammage, setGrammage]}
        />
        <VPouchCover
          boxWidth={boxWidth}
          boxThickness={boxThickness}
          grammage={grammage}
        />
        <div className="w-full max-w-4xl">
          <img src={vPouchUrl} />
        </div>
        <YoutubeEmbed embedId="fEgUx_0-1Qs" className="max-w-4xl" />
      </div>
    </MathJaxContainer>
  );
}

function VPouchMeasures({
  boxWidth,
  boxThickness,
  grammage,
}: {
  boxWidth: number;
  boxThickness: number;
  grammage: number;
}) {
  const isThick = grammage > 200;
  const thickFact = isThick ? 1 : 0;
  const sheetLength = boxWidth * 4 + boxThickness * 2 + thickFact * 3;
  return (
    <>
      <div className="mt-2 font-bold">
        Largeur de la feuille: {formatResult(boxWidth)}
      </div>
      <div className="mt-2 font-bold">
        Longueur de la feuille: {formatResult(sheetLength)}
      </div>
      <MarkList
        prefix="l"
        marks={[
          boxWidth - boxThickness,
          boxThickness,
          boxWidth,
          boxThickness + thickFact * 1,
          boxWidth + thickFact * 1,
          boxThickness + thickFact * 1,
          boxWidth,
        ]}
      />
    </>
  );
}

function VPouch({
  widthState,
  thicknessState,
  grammageState,
}: {
  widthState: UseState;
  thicknessState: UseState;
  grammageState: UseState;
}) {
  const [boxWidth] = widthState;
  const [boxThickness] = thicknessState;
  const [grammage] = grammageState;
  return (
    <div>
      <Subtitle>Pochette V</Subtitle>
      <SizeInput title="Largeur des cartes" state={widthState} />
      <SizeInput title="Epaisseur du paquet" state={thicknessState} />
      <SizeInput title="Grammage du papier" state={grammageState} />
      <VPouchMeasures
        boxWidth={boxWidth}
        grammage={grammage}
        boxThickness={boxThickness}
      />
    </div>
  );
}

function VPouchCover({
  boxWidth,
  boxThickness: boxThickness,
  grammage,
}: {
  boxWidth: number;
  boxThickness: number;
  grammage: number;
}) {
  const [coverWidthMargin, setWidthMargin] = useState(2);
  const [coverThicknessMargin, setThicknessMargin] = useState(2);
  const coverWith = boxWidth + coverWidthMargin;
  const coverThickness = boxThickness + coverThicknessMargin;
  return (
    <div>
      <Subtitle>Couvercle pochette en V</Subtitle>
      <SizeInput
        title="Marge couvercle en largeur"
        state={[coverWidthMargin, setWidthMargin]}
      />
      <SizeInput
        title="Marge couvercle en épaisseur"
        state={[coverThicknessMargin, setThicknessMargin]}
      />
      <VPouchMeasures
        boxWidth={coverWith}
        grammage={grammage}
        boxThickness={coverThickness}
      />
    </div>
  );
}
