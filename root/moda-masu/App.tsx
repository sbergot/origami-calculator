import { useState } from "react";
import {
  formatResult,
  MathJaxContainer,
  Result,
  SizeInput,
  YoutubeEmbed,
} from "../Shared/Layout";
import { UseState } from "../Shared/UITypes";
import modaMasuUrl from "./moda-masu.svg";

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
        <ModaMasuCover
          boxWidth={boxWidth}
          boxLength={boxLength}
          boxHeight={boxHeigth}
        />
        <div className="w-full max-w-sm">
          <img src={modaMasuUrl} />
        </div>
        <YoutubeEmbed embedId="WYvvkrYawpk" className="max-w-md" />
      </div>
    </MathJaxContainer>
  );
}

function ModaMasuMeasures({
  boxWidth,
  boxLength,
  boxHeight,
}: {
  boxWidth: number;
  boxLength: number;
  boxHeight: number;
}) {
  const sheetWidth = (boxWidth + boxLength + 4 * boxHeight) / Math.sqrt(2);
  return (
    <>
      <div className="mt-4 formula-grid">
        <span>Largeur feuille</span>
        <Result value={sheetWidth} />
      </div>
      <p className="max-w-sm my-4">
        Marquer chaque diagonale sept fois aux mesures indiquées dans le tableau
        suivant (mettre le 0 de la règle sur le coin côté m1).
      </p>
      <div className="grid justify-start gap-2 grid-cols-3fc grid-flow-row sm:grid-rows-3 sm:grid-flow-col">
        <span></span>
        <span>diagonale 1</span>
        <span>diagonale 2</span>
        <span>m1</span>
        <span>
          {formatResult(
            (sheetWidth * Math.sqrt(2)) / 2 - boxLength / 2 - boxHeight * 2
          )}
        </span>
        <span>
          {formatResult(
            (sheetWidth * Math.sqrt(2)) / 2 - boxWidth / 2 - boxHeight * 2
          )}
        </span>
        <span>m2</span>
        <span>
          {formatResult(
            (sheetWidth * Math.sqrt(2)) / 2 - boxLength / 2 - boxHeight
          )}
        </span>
        <span>
          {formatResult(
            (sheetWidth * Math.sqrt(2)) / 2 - boxWidth / 2 - boxHeight
          )}
        </span>
        <span>m3</span>
        <span>
          {formatResult((sheetWidth * Math.sqrt(2)) / 2 - boxLength / 2)}
        </span>
        <span>
          {formatResult((sheetWidth * Math.sqrt(2)) / 2 - boxWidth / 2)}
        </span>
        <span>m4</span>
        <span>{formatResult((sheetWidth * Math.sqrt(2)) / 2)}</span>
        <span>{formatResult((sheetWidth * Math.sqrt(2)) / 2)}</span>
        <span>m5</span>
        <span>
          {formatResult((sheetWidth * Math.sqrt(2)) / 2 + boxLength / 2)}
        </span>
        <span>
          {formatResult((sheetWidth * Math.sqrt(2)) / 2 + boxWidth / 2)}
        </span>
        <span>m6</span>
        <span>
          {formatResult(
            (sheetWidth * Math.sqrt(2)) / 2 + boxLength / 2 + boxHeight
          )}
        </span>
        <span>
          {formatResult(
            (sheetWidth * Math.sqrt(2)) / 2 + boxWidth / 2 + boxHeight
          )}
        </span>
        <span>m7</span>
        <span>
          {formatResult(
            (sheetWidth * Math.sqrt(2)) / 2 + boxLength / 2 + boxHeight * 2
          )}
        </span>
        <span>
          {formatResult(
            (sheetWidth * Math.sqrt(2)) / 2 + boxWidth / 2 + boxHeight * 2
          )}
        </span>
      </div>
    </>
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
  return (
    <div>
      <h2 className="text-lg font-bold">Boîte Moda Masu</h2>
      <SizeInput title="Largeur de la boîte" state={widthState} />
      <SizeInput title="Longueur de la boîte" state={lengthState} />
      <SizeInput title="Hauteur de la boîte" state={heightState} />
      <ModaMasuMeasures
        boxWidth={boxWidth}
        boxHeight={boxHeight}
        boxLength={boxLength}
      />
    </div>
  );
}

function ModaMasuCover({
  boxWidth,
  boxLength,
  boxHeight,
}: {
  boxWidth: number;
  boxLength: number;
  boxHeight: number;
}) {
  const [coverWidthMargin, setWidthMargin] = useState(2);
  const [coverLengthMargin, setLengthMargin] = useState(4);
  const [coverHeightMargin, setHeightMargin] = useState(3);
  const coverWith = boxWidth + coverWidthMargin;
  const coverLength = boxLength + coverLengthMargin;
  const coverHeight = boxHeight - coverHeightMargin;
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
      <SizeInput
        title="Marge couvercle en hauteur"
        state={[coverHeightMargin, setHeightMargin]}
      />
      <ModaMasuMeasures
        boxWidth={coverWith}
        boxHeight={coverHeight}
        boxLength={coverLength}
      />
    </div>
  );
}
