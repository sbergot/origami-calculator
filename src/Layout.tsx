import { MathJaxContext } from "better-react-mathjax";
import { useState } from "react";
import { Children } from "./UITypes";

export function Container({ children }: Children) {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="font-bold text-3xl">
        <a href="/">origami calculator</a>
      </h1>
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

export function YoutubeEmbed({ embedId }: { embedId: string }) {
  return (
    <div className="video-responsive">
      <iframe
        width="520"
        height="293"
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
