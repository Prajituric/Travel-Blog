import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/danny.jpg"
          alt="An image of me"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Danny</h1>
      <p>
        I post about my travelling experience and the place you definately
        should visit!
      </p>
    </section>
  );
}

export default Hero;
