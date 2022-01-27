import { Container, Link, Subtitle } from "./Shared/Components";

export default function App() {
  return (
    <Container>
      <div className="flex flex-wrap gap-x-16 gap-y-4">
        <div className="flex flex-col gap-2">
          <Subtitle>Pliages</Subtitle>
          <Link href="masu/">Boîte & diviseurs Masu</Link>
          <Link href="moda-masu/">Boîte Moda Masu</Link>
          <Link href="baggi/">Boîte Baggi</Link>
          <Link href="corolle/">Boîte Corolle</Link>
          <Link href="hexagonal/">Boîte hexagonale</Link>
          <Link href="kata/">Boîte & diviseur Katta</Link>
          <Link href="v-pouch/">Pochette en V</Link>
        </div>
        <div className="flex flex-col gap-2">
          <Subtitle>Autres ressources</Subtitle>
          <Link href="https://www.facebook.com/groups/406940570021633">
            Groupe facebook Les ludistes origamistes
          </Link>
          <Link href="https://www.youtube.com/channel/UCa9UGMUNxCivPFoLN6k_9Ug">
            Chaîne youtube Les ludistes origamistes
          </Link>
          <Link href="https://www.youtube.com/channel/UColNj5F2YvcqKY2mvvbus-Q">
            Chaîne youtube Mémo-règles
          </Link>
          <Link href="https://www.youtube.com/watch?v=xYKxWUL2pWo">
            Le matériel pour démarrer
          </Link>
          <Link href="https://www.facebook.com/groups/406940570021633/posts/787122218670131/">
            Galerie de photos avec des exemples de pliages
          </Link>
          <Link href="https://www.corniro.com/">www.corniro.com</Link>
          <Link href="https://github.com/sbergot/origami-calculator">
            Code source de ce site
          </Link>
          <Link href="https://github.com/sbergot/origami-calculator/issues">
            Signaler un problème
          </Link>
        </div>
      </div>
    </Container>
  );
}
