import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className="grid grid-col-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero animi
          autem labore, quaerat rerum beatae repudiandae ullam fuga? Expedita
          obcaecati repudiandae quidem maiores harum sapiente praesentium cum
          pariatur, veritatis repellat!
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products" className="capitalize">
            our products
          </Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}

export default Hero;
