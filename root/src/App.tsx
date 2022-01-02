import { Container } from "./Layout";
import { Children } from "./UITypes";

function Link({ href, children }: { href: string } & Children) {
  return (
    <a
      className="underline text-orange-600 visited:text-orange-800"
      href={href}
    >
      {children}
    </a>
  );
}

export default function App() {
  return (
    <Container>
      <div className="mt-4">
        <Link href="masu/">Boîte Masu & diviseurs</Link>
      </div>
      <div className="mt-4">
        <Link href="baggi/">Boîte Baggi</Link>
      </div>
    </Container>
  );
}
