import { useState } from "react";
import {
  formatResult,
  Link,
  MathJaxContainer,
  SizeInput,
  Subtitle,
  YoutubeEmbed,
} from "../Shared/Components";
import { UseState } from "../Shared/UITypes";
import kataBoxUrl from "./kata-box.svg";

export default function App() {
  return (
    <MathJaxContainer>
      <div className="fluid-container mt-4">
        <KataBox />
        <div className="w-full max-w-md">
          <img src={kataBoxUrl} />
        </div>
        <KataDivisor />
      </div>
    </MathJaxContainer>
  );
}

function MarkList({ prefix, marks }: { prefix: string; marks: number[] }) {
  const cumulatedMarks: number[] = [];
  let acc = 0;
  for (const m of marks) {
    acc += m;
    cumulatedMarks.push(acc);
  }
  return (
    <div className="grid justify-start gap-2 grid-cols-3fc grid-flow-row sm:grid-rows-3 sm:grid-flow-col">
      <span></span>
      <span>écarts</span>
      <span>cumulés</span>
      {marks.map((m, i) => (
        <>
          <span>{prefix + (i + 1)}</span>
          <span>{formatResult(m)}</span>
          <span>{formatResult(cumulatedMarks[i])}</span>
        </>
      ))}
    </div>
  );
}

function KataBox() {
  const [height, setHeight] = useState(19);
  const [width, setWidth] = useState(69);
  const [length, setLength] = useState(126);
  const [margin, setMargin] = useState(1.2);
  return (
    <div>
      <Subtitle>Boîte kata</Subtitle>
      <Link href="https://www.facebook.com/groups/406940570021633/permalink/698296610886026/">
        Tutorial
      </Link>
      <SizeInput title="Hauteur" state={[height, setHeight]} />
      <SizeInput title="Largeur" state={[width, setWidth]} />
      <SizeInput title="Longueur" state={[length, setLength]} />
      <SizeInput title="Marge" state={[margin, setMargin]} />
      <div className="mt-2 font-bold">
        Longueur de la feuille: {formatResult(length + 2 * height)}
      </div>
      <MarkList prefix="l" marks={[height, length, height]} />
      <div className="mt-2 font-bold">
        Largeur de la feuille: {formatResult(width + height * 4 + margin * 2)}
      </div>
      <MarkList
        prefix="w"
        marks={[margin, height, height, width, height, height, margin]}
      />
    </div>
  );
}

function processSectionNumber(i: number): number {
  return Math.max(Math.min(Math.trunc(i), 6), 2);
}

function KataDivisor() {
  const [height, setHeight] = useState(18);
  const [width, setWidth] = useState(45);
  const [sectionNbr, setSectionNbr] = useState(4);
  const [sections, setSections] = useState([35, 20, 20, 35, 0, 0]);
  function setSectionAt(idx: number, value: number) {
    const newSections = [...sections];
    newSections[idx] = value;
    setSections(newSections);
  }
  return (
    <div>
      <Subtitle>Diviseur kata 1</Subtitle>
      <SizeInput title="Hauteur" state={[height, setHeight]} />
      <SizeInput title="Largeur" state={[width, setWidth]} />
      <SizeInput
        title="Nombre de sections"
        state={[sectionNbr, setSectionNbr]}
        process={processSectionNumber}
      />
      {sections.map((section, idx) => (
        <div>
          <p>section {idx}</p>
          <input
            type="number"
            className="border px-2"
            value={section}
            disabled={idx >= sectionNbr}
            onChange={(e) => setSectionAt(idx, parseInt(e.currentTarget.value))}
          />
        </div>
      ))}
    </div>
  );
}
