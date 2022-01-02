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
      <div className="flex flex-col gap-2">
        <h2 className="font-bold">Pliages</h2>
        <Link href="masu/">Boîte Masu & diviseurs</Link>
        <Link href="baggi/">Boîte Baggi</Link>
        <h2 className="font-bold">Autres ressources</h2>
        <Link href="https://www.facebook.com/groups/406940570021633">Les ludistes origamistes sur facebook</Link>
        <Link href="https://www.corniro.com/">www.corniro.com</Link>

      </div>
    </Container>
  );
}
