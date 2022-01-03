import { MathJaxContext } from "better-react-mathjax";
import { useState } from "react";
import { Children } from "./UITypes";

import titleUrl from "./title.png";
import facebookUrl from "./facebook.png";

export function Container({ children }: Children) {
  return (
    <div className="max-w-4xl mx-auto p-1">
      <div className="flex flex-wrap items-end justify-center mx-auto mb-8">
        <a href="/" className="block max-w-full">
          <img
            src={titleUrl}
            alt="Les ludistes origamistes"
          />
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

export function YoutubeEmbed({ embedId, className }: { embedId: string; className?: string }) {
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
