import { useState } from "react";
import {
  Link,
  MathJaxContainer,
  SizeInput,
  Subtitle,
  YoutubeEmbed,
} from "../Shared/Components";
import { UseState } from "../Shared/UITypes";
import corolleUrl from "./corolle.svg";
import moduleUrl from "./assemblable.svg";

export default function App() {
  const [boxWidth, setWidth] = useState(85);
  const [boxLength, setLength] = useState(130);
  const [boxHeigth, setHeight] = useState(10.5);
  return (
    <MathJaxContainer>
      <div className="fluid-container mt-4">
        <CorolleBox
          widthState={[boxWidth, setWidth]}
          lengthState={[boxLength, setLength]}
          heightState={[boxHeigth, setHeight]}
        />
        <div className="w-full max-w-lg">
          <img src={corolleUrl} />
        </div>
        <CorolleModule
          boxWidth={boxWidth}
          boxLength={boxLength}
          boxHeight={boxHeigth}
        />
        <div className="w-full max-w-lg">
          <img src={moduleUrl} />
        </div>
        <YoutubeEmbed embedId="8EJCqO5RVgU" className="max-w-4xl" />
      </div>
    </MathJaxContainer>
  );
}

function CorolleBox({
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
      <Subtitle>Boîte corolle</Subtitle>
      <SizeInput title="Largeur de la boîte" state={widthState} />
      <SizeInput title="Longueur de la boîte" state={lengthState} />
      <SizeInput title="Hauteur de la boîte" state={heightState} />
      <div>Largeur de la feuille = {boxHeight * 2 + boxWidth}</div>
      <div>Longueur de la feuille = {boxHeight * 2 + boxLength}</div>
      <Link href="https://www.facebook.com/groups/406940570021633/permalink/694030974645923/">Tutorial</Link>
    </div>
  );
}

function CorolleModule({
  boxWidth,
  boxLength,
  boxHeight,
}: {
  boxWidth: number;
  boxLength: number;
  boxHeight: number;
}) {
  return (
    <div>
      <Subtitle>Module assemblable</Subtitle>
      <div>Largeur de la feuille = {boxHeight * 3 + boxWidth}</div>
      <div>Longueur de la feuille = {boxHeight * 2 + boxLength}</div>
      <Link href="https://www.facebook.com/groups/406940570021633/permalink/702912703757750/">Tutorial</Link>
    </div>
  );
}
