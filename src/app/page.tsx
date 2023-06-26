import Image from "next/image";
import styles from "./page.module.css";
import Container from "./components/Container";
import Button from "./components/buttons/Button";
import { AiOutlineTwitter } from "react-icons/ai";

import { BiLogoDiscordAlt } from "react-icons/bi";
import { SiMedium } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import WhitePaperButton from "./components/buttons/WhitePaperButton";
import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        background:
          "linear-gradient(305deg, rgba(100,150,162,1) 23%, rgba(52,82,97,1) 50%, rgba(34,67,87,1) 77%)",
      }}
    >
      <Container>
        <div className={styles.logoAndButton}>
          <Image
            className={styles.logo}
            src={`/logo.svg`}
            alt="logo"
            width={1000}
            height={1000}
          />
          <Link href={"https://ouija.exchange/"}>
            <Button />
          </Link>
        </div>

        <div className={styles.socialsAndGoal}>
          <div className={styles.socials}>
            <AiOutlineTwitter className={styles.socialIcon} />
            <BiLogoDiscordAlt className={styles.socialIcon} />
            <SiMedium className={styles.socialIcon} />
            <AiFillGithub className={styles.socialIcon} />
          </div>

          <div className={styles.goal}>
            <p className={styles.goalText}>
              Ouija AMM is a novel, hyper capital efficient AMM protocol,
              bringing the deepest liquidity at oracle pricing. Swap and earn at
              a superior market rate in the omnichain future.
            </p>
            <Link href={"https://ouija.exchange/"}>
              <WhitePaperButton />
            </Link>
          </div>
        </div>

        <div className={styles.productsAndUnderscore}>
          <h1 className={styles.products}>Product</h1>
          <Image
            src={`underscore.svg`}
            alt={"underscore"}
            width={1000}
            height={1000}
            className={styles.underscore}
          />
        </div>

        <div className={styles.aboutContainer}>
          <div
            className={styles.aboutItem}
            style={{
              backgroundImage: "url('/box.svg')",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p className={styles.aboutText}>
              Best in-class capital efficiency, maximising yield and liquidity
              depth
            </p>
          </div>

          <div
            className={styles.aboutItem}
            style={{
              backgroundImage: "url('/box.svg')",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p className={styles.aboutText}>
              Passive concentrated AMM liquidity management
            </p>
          </div>

          <div
            className={styles.aboutItem}
            style={{
              backgroundImage: "url('/box.svg')",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p className={styles.aboutText}>
              Oracle based swap execution, always giving the most representative
              prices{" "}
            </p>
          </div>
        </div>

        <div className={styles.parnersAndUnderscore}>
          <h1 className={styles.parners}>Partners</h1>
          <Image
            src={`underscore.svg`}
            alt={"underscore"}
            width={1000}
            height={1000}
            className={styles.underscore}
          />
        </div>

        <div className={styles.partners}>
          <Image
            src={"/polygon.svg"}
            alt="partner"
            width={1000}
            height={1000}
            className={styles.partner}
          />
          <Image
            src={"/polygon.svg"}
            alt="partner"
            width={1000}
            height={1000}
            className={styles.partner}
          />
          <Image
            src={"/polygon.svg"}
            alt="partner"
            width={1000}
            height={1000}
            className={styles.partner}
          />
          <Image
            src={"/polygon.svg"}
            alt="partner"
            width={1000}
            height={1000}
            className={styles.partner}
          />
          <Image
            src={"/polygon.svg"}
            alt="partner"
            width={1000}
            height={1000}
            className={styles.partner}
          />
          <Image
            src={"/polygon.svg"}
            alt="partner"
            width={1000}
            height={1000}
            className={styles.partner}
          />
          <Image
            src={"/polygon.svg"}
            alt="partner"
            width={1000}
            height={1000}
            className={styles.partner}
          />
        </div>

        <div className={styles.insightsAndUnderscore}>
          <h1 className={styles.insights}>Insigns</h1>
          <Image
            src={`underscore.svg`}
            alt={"underscore"}
            width={1000}
            height={1000}
            className={styles.underscore}
          />
        </div>

        <div className={styles.insightsContainer}>
          <div className={styles.insightCard}>
            <Image
              className={styles.insightImage}
              src={`/crystal1.png`}
              alt={"insight"}
              width={1000}
              height={1000}
            />
            <p className={styles.insightText}>
              Occaecat qui in cillum aute est esse tempor ad do aute do.
            </p>
          </div>

          <div className={styles.insightCard}>
            <Image
              className={styles.insightImage}
              src={`/crystal2.png`}
              alt={"insight"}
              width={1000}
              height={1000}
            />
            <p className={styles.insightText}>
              Occaecat qui in cillum aute est esse tempor ad do aute do.
            </p>
          </div>

          <div className={styles.insightCard}>
            <Image
              className={styles.insightImage}
              src={`/crystal3.png`}
              alt={"insight"}
              width={1000}
              height={1000}
            />
            <p className={styles.insightText}>
              Occaecat qui in cillum aute est esse tempor ad do aute do.
            </p>
          </div>
        </div>

        <div className={styles.buttonCenter}>
          <button
            className={styles.meduimButton}
            style={{
              background:
                "linear-gradient(90deg, rgba(178,226,204,1) 15%, rgba(103,160,184,1) 75%)",
            }}
          >
            Medium
          </button>
        </div>

        <div>
          <div className={styles.footer}>
            <div className={styles.logoAndSocials}>
              <Image
                className={styles.footerLogo}
                src={`/logo.svg`}
                alt="logo"
                width={1000}
                height={1000}
              />
              <div className={styles.aboutSocials}>
                <AiOutlineTwitter className={styles.socialIcon} />
                <BiLogoDiscordAlt className={styles.socialIcon} />
                <SiMedium className={styles.socialIcon} />
              </div>
            </div>

            <div className={styles.docs}>
              <h1 className={styles.aboutHeader}>DOCS</h1>

              <p className={styles.footerText}>Whitepaper</p>
              <p className={styles.footerText}>Github</p>
              <p className={styles.footerText}>Gitbook</p>
            </div>

            <div className={styles.aboutFooter}>
              <h1 className={styles.aboutHeader}>ABOUT</h1>

              <p className={styles.footerText}>Our product</p>
              <p className={styles.footerText}>Investors</p>
              <p className={styles.footerText}>Partners</p>
              <p className={styles.footerText}>Team</p>
              <p className={styles.footerText}>Branding</p>
            </div>
          </div>
          <p className={styles.rights}>All Rights Reserved</p>
        </div>
      </Container>
    </main>
  );
}
