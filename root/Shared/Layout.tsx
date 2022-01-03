import { MathJax, MathJaxContext } from "better-react-mathjax";
import { useState } from "react";
import { Children, UseState } from "./UITypes";

import titleUrl from "./title.png";
import facebookUrl from "./facebook.png";

export function Container({ children }: Children) {
  return (
    <div className="max-w-4xl mx-auto p-1">
      <div className="flex flex-wrap items-end justify-center mx-auto mb-8">
        <a href="/" className="block max-w-full">
          <img src={titleUrl} alt="Les ludistes origamistes" />
        </a>
        <a href="https://www.facebook.com/groups/406940570021633">
          <img src={facebookUrl} className="w-8" alt="facebook" />
        </a>
      </div>
      {children}
    </div>
  );
}

export function MathJaxContainer({ children }: Children) {
  const [loaded, setLoaded] = useState(false);
  return (
    <Container>
      <div className={loaded ? "" : "hidden"}>
        <MathJaxContext onLoad={() => setLoaded(true)}>
          {children}
        </MathJaxContext>
      </div>
    </Container>
  );
}

export function YoutubeEmbed({
  embedId,
  className,
}: {
  embedId: string;
  className?: string;
}) {
  return (
    <div className={`w-full ${className}`}>
      <div className="video-responsive">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${embedId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export function SizeInput({
  title,
  state: [value, setter],
}: {
  title: string;
  state: UseState;
}) {
  return (
    <div>
      <p>{title}</p>
      <input
        type="number"
        className="border px-2"
        value={value}
        onChange={(e) => setter(parseInt(e.currentTarget.value))}
      />
    </div>
  );
}

export function formatResult(x: number): string {
  return (Math.round(x * 100) / 100).toString();
}

export function Result({ value }: { value: number }) {
  return <span>=&nbsp;{formatResult(value)}</span>;
}

export function Formula({ formula }: { formula: string }) {
  return <MathJax>{`\\(${formula}\\)`}</MathJax>;
}

export function FormulaSmall({ formula }: { formula: string }) {
  return <MathJax>{`\\(\\small{${formula}}\\)`}</MathJax>;
}

export function Link({ href, children }: { href: string } & Children) {
  return (
    <a
      className="underline text-orange-600 visited:text-orange-800"
      href={href}
    >
      {children}
    </a>
  );
}
