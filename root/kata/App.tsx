import { useState } from "react";
import {
  formatResult,
  Link,
  MathJaxContainer,
  SizeInput,
  Subtitle,
  YoutubeEmbed,
} from "../Shared/Components";
import { UseState, UseStateArray } from "../Shared/UITypes";
import kataBoxUrl from "./kata-box.svg";
import kataDivisor1Url from "./kata-divisor1.svg";

export default function App() {
  return (
    <MathJaxContainer>
      <div className="fluid-container mt-4">
        <KataDivisors />
        <KataBox />
        <div className="w-full max-w-md">
          <img src={kataBoxUrl} />
        </div>
        <YoutubeEmbed embedId="QkVtTkP8J7k" className="max-w-4xl" />
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

function KataDivisors() {
  const [height, setHeight] = useState(18);
  const [width, setWidth] = useState(45);
  const [sectionNbr, setSectionNbr] = useState(4);
  const [sections, setSections] = useState([35, 20, 20, 35, 0, 0]);
  return (
    <>
      <KataDivisorsInputs
        height={[height, setHeight]}
        width={[width, setWidth]}
        sectionNbr={[sectionNbr, setSectionNbr]}
        sections={[sections, setSections]}
      />
      <KataDivisor1Measurement height={height} width={width} sections={sections.slice(0, sectionNbr)} />
    </>
  );
}

function KataDivisorsInputs({
  height,
  width,
  sectionNbr,
  sections,
}: {
  height: UseState;
  width: UseState;
  sectionNbr: UseState;
  sections: UseStateArray;
}) {
  const [sectionNbrValue] = sectionNbr;
  const [sectionsValue, setSections] = sections;
  function setSectionAt(idx: number, value: number) {
    const newSections = [...sectionsValue];
    newSections[idx] = value;
    setSections(newSections);
  }
  return (
    <div>
      <Subtitle>Diviseur kata</Subtitle>
      <Link href="https://www.facebook.com/groups/406940570021633/permalink/698296610886026/">
        Tutorial
      </Link>
      <SizeInput title="Hauteur" state={height} />
      <SizeInput title="Largeur" state={width} />
      <SizeInput
        title="Nombre de sections"
        state={sectionNbr}
        process={processSectionNumber}
      />
      {sectionsValue.map((section, idx) => (
        <div>
          <p>section {idx}</p>
          <input
            type="number"
            className="border px-2"
            value={section}
            disabled={idx >= sectionNbrValue}
            onChange={(e) => setSectionAt(idx, parseInt(e.currentTarget.value))}
          />
        </div>
      ))}
    </div>
  );
}

function KataDivisor1Measurement({height,width,sections}: {
  height: number;
  width: number;
  sections: number[];
}) {
  const margin = 2;
  const adjustedHeight = height - margin;
  const sectionsNbr = sections.length;
  const sectionsSum = sections.reduce((a,b) => a+b, 0);
  const lengthMarks = [];
  for (const section of sections) {
    lengthMarks.push(section, height, height);
  }
  lengthMarks.pop();
  lengthMarks.pop();
  return (
    <div>
      <Subtitle>Diviseur kata 1</Subtitle>
      <div className="mt-2 font-bold">
        Largeur de la feuille: {formatResult(width + adjustedHeight * 2)}
      </div>
      <MarkList
        prefix="w"
        marks={[adjustedHeight, width, adjustedHeight]}
      />
      <div className="mt-2 font-bold">
        Longueur de la feuille: {formatResult(sectionsSum + (height * 2 * (sectionsNbr - 1)))}
      </div>
      <MarkList prefix="l" marks={lengthMarks} />
      <div className="w-full max-w-md">
          <img src={kataDivisor1Url} />
      </div>
    </div>
  );
}
