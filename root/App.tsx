import { Container, Link } from "./Shared/Layout";

export default function App() {
  return (
    <Container>
      <div className="flex flex-wrap gap-x-16 gap-y-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold">Pliages</h2>
          <Link href="masu/">Boîte Masu & diviseurs</Link>
          <Link href="moda-masu/">Boîte Moda Masu</Link>
          <Link href="baggi/">Boîte Baggi</Link>
          <Link href="corolle/">Boîte Corolle</Link>
          <Link href="hexagonal/">Boîte hexagonale (WIP)</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold">Autres ressources</h2>
          <Link href="https://www.facebook.com/groups/406940570021633">
            Groupe facebook Les ludistes origamistes
          </Link>
          <Link href="https://www.youtube.com/channel/UCa9UGMUNxCivPFoLN6k_9Ug">
            Chaîne youtube Les ludistes origamistes
          </Link>
          <Link href="https://www.youtube.com/channel/UColNj5F2YvcqKY2mvvbus-Q">
            Chaîne youtube Mémo-règles
          </Link>
          <Link href="https://www.corniro.com/">www.corniro.com</Link>
          <Link href="https://github.com/sbergot/origami-calculator">
            Code source de ce site
          </Link>
        </div>
      </div>
    </Container>
  );
}
