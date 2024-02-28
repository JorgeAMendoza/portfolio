import FeatureCard from '@/components/FeatureCard/FeatureCard';
import {
  DogIcon,
  GitHubIcon,
  LinkedinIcon,
  TwitterIcon,
} from '@/components/Icons';
import Layout from '@/components/Layout/Layout';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import Section from '@/components/Section/Section';
import { getProjectInfo, getShowcaseInfo } from '@/lib/get-project-info';
import { sourceSansPro, spaceMono } from '@/utils/fonts';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import locationIcon from '../../public/icons/location-icon.svg';
import schoolIcon from '../../public/icons/school-icon.svg';
import jorgeImage from '../../public/jorge-image.webp';
import styles from '../styles/index.module.css';

interface HomeProps {
  showcaseInformation: ShowcaseProjectInfo[];
  projectsInformation: ProjectInfo[];
}

export const getStaticProps: GetStaticProps = () => {
  const showcaseInformation = getShowcaseInfo();
  const projectsInformation = getProjectInfo();
  return {
    props: {
      showcaseInformation,
      projectsInformation,
    },
  };
};

export default function Home({
  showcaseInformation,
  projectsInformation,
}: HomeProps) {
  return (
    <Layout>
      <Head>
        <title>Jorge A. Mendoza - Frontend Developer</title>
        <meta
          name="description"
          content="Portfolio website for Jorge A. Mendoza, a front-end software engineer passionate about creating accessible and performant user experiences on the web using tools such as TypeScript, Next JS, React, and Styled-components."
        />
        <meta
          property="og:title"
          content="Jorge A. Mendoza - Frontend Developer"
        />
        <meta
          property="og:description"
          content="Portfolio website for Jorge A. Mendoza, a front-end software engineer passionate about creating accessible and performant user experiences on the web using tools such as TypeScript, Next JS, React, and Styled-components."
        />
        <meta
          property="og:image"
          content="https://www.jorgemendozadev.com/jorge-image.webp"
        />
        <meta property="og:url" content="https://jorgemendozadev.com" />

        {/* Twitter Card Information */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Jorge A. Mendoza - Frontend Developer"
        />
        <meta
          name="twitter:description"
          content="Portfolio website for Jorge A. Mendoza, a front-end software engineer passionate about creating accessible and performant user experiences on the web using tools such as TypeScript, Next JS, React, and Styled-components."
        />
        <meta
          name="twitter:image"
          content="https://www.jorgemendozadev.com/jorge-image.webp"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.homeHeader}>
          <section
            id="home-header"
            className={styles.sectionContainer}
            aria-label="hero section of the portfolio"
          >
            <div className={styles.headerContent}>
              <div
                className={`${sourceSansPro.className} ${styles.headerTitle}`}
              >
                <p className={styles.headerIntro}>Welcome! 🐕 My name is...</p>
                <h1 className={styles.headerTitleText}>
                  Jorge A. Mendoza
                  <span className={styles.headerSubtitle}>
                    Front End Developer
                  </span>
                </h1>
              </div>
              <div className={styles.headerInformation}>
                <div className={styles.info}>
                  <div>
                    <p className={styles.iconInfo}>
                      <span>
                        <Image
                          src={locationIcon}
                          alt="location icon"
                          width={30}
                          height={30}
                        />
                      </span>
                      Dallas, TX
                    </p>
                    <p className={styles.iconInfo}>
                      <span>
                        <Image
                          src={schoolIcon}
                          alt="school icon"
                          width={30}
                          height={30}
                        />
                      </span>
                      BA in Information Technology
                    </p>
                  </div>
                </div>

                <p className={styles.headerDescription}>
                  A front-end software engineer focused on crafting accessible
                  and performant experiences on the web. With a keen eye for
                  detail and a passion for learning, I am always searching for
                  ways to improve the quality of the web for everyone.
                </p>
              </div>

              <div className={styles.headerProjectLinkContainer}>
                <a
                  href="#project-showcase"
                  className={`${spaceMono.className} ${styles.headerProjectLink}`}
                >
                  Check out my projects!
                </a>
              </div>
            </div>
          </section>
        </div>

        <Section threshold={[0.4, 0.25]}>
          <section
            id="about-me"
            className={styles.sectionContainer}
            aria-label="personal information and skills for Jorge A. Mendoza"
          >
            <div className={styles.titleContainer}>
              <h2 className={`${sourceSansPro.className} ${styles.aboutTitle}`}>
                About Me
              </h2>
            </div>

            <div className={styles.aboutContent}>
              <div className={styles.aboutImage}>
                <Image
                  src={jorgeImage}
                  width={400}
                  height={530}
                  alt="image of jorge mendoza"
                  placeholder="blur"
                />
              </div>
              <div className={styles.aboutText}>
                <h3
                  className={`${sourceSansPro.className} ${styles.aboutSubTitle}`}
                >
                  My Story
                </h3>
                <p>
                  A <em>Front-end Developer</em> looking for a new role and
                  opportunities. In my senior year of college I took an{' '}
                  <em>introduction to web-development course</em>, and
                  post-graduation, have continued to improve my skills in
                  front-end/UI engineering by learning about the latest
                  advancements in web development, building applications, and
                  reviewing best practices.
                </p>
                <p>
                  I have used <em>React, TypeScript, Styled-Components</em> and
                  other tools to create user-interfaces that are{' '}
                  <em>responsive, performant, and accessible</em>. From
                  developing password generators to full-stack applications with
                  authentication and integration testing, I have a set of skills
                  that allow me to plan, test, and efficiently create user
                  interfaces.
                </p>
                <p>
                  I am currently open to job opportunities where I can
                  <em> contribute, learn, and grow</em> as not just a software
                  developer, but a person as well. If you believe that I am the
                  developer that will mesh well with your team and goals, please
                  feel free to <a href="#contact-me">get in touch!</a>
                </p>
              </div>
              <div>
                <h3
                  className={`${sourceSansPro.className} ${styles.aboutSubTitle}`}
                >
                  Skills & Tech
                </h3>
                <ul
                  className={`${spaceMono.className} ${styles.skillsList}`}
                  aria-label="list of skills that Jorge A. Mendoza provides"
                >
                  <li className={styles.skillsTab}>
                    HTML5
                    <Image
                      src="/icons/html5-icon.svg"
                      alt="HTML5 icon"
                      width={22}
                      height={22}
                    />
                  </li>
                  <li className={styles.skillsTab}>
                    CSS3
                    <Image
                      src="/icons/css-icon.svg"
                      alt="CSS Icon"
                      width={22}
                      height={22}
                    />
                  </li>
                  <li className={styles.skillsTab}>
                    JavaScript
                    <Image
                      src="/icons/javascript-icon.svg"
                      alt="javascript icon"
                      width={22}
                      height={22}
                    />
                  </li>
                  <li className={styles.skillsTab}>
                    TypeScript
                    <Image
                      src="/icons/typescript-icon.svg"
                      alt="typescript icon"
                      width={22}
                      height={22}
                    />
                  </li>
                  <li className={styles.skillsTab}>
                    React
                    <Image
                      src="/icons/react-icon.svg"
                      alt="react icon"
                      width={22}
                      height={22}
                    />
                  </li>
                  <li className={styles.skillsTab}>
                    Redux
                    <Image
                      src="/icons/redux-icon.svg"
                      alt="redux icon"
                      width={22}
                      height={22}
                    />
                  </li>
                  <li className={styles.skillsTab}>
                    NextJS
                    <Image
                      src="/icons/nextjs-icon.svg"
                      alt="next js icon"
                      width={22}
                      height={22}
                    />
                  </li>
                  <li className={styles.skillsTab}>
                    NodeJS
                    <Image
                      src="/icons/nodejs-icon.svg"
                      alt="node js icon"
                      width={22}
                      height={22}
                    />
                  </li>
                  <li className={styles.skillsTab}>
                    GraphQL
                    <Image
                      src="/icons/graphql-icon.svg"
                      alt="graphql icon"
                      width={22}
                      height={22}
                    />
                  </li>
                  <li className={styles.skillsTab}>
                    Docker
                    <Image
                      src="/icons/docker-icon.svg"
                      alt="docker icon"
                      width={22}
                      height={22}
                    />
                  </li>
                  <li className={styles.skillsTab}>
                    MongoDB
                    <Image
                      src="/icons/mongodb-icon.svg"
                      alt="mongodb icon"
                      width={22}
                      height={22}
                    />
                  </li>
                  <li className={styles.skillsTab}>
                    Git
                    <Image
                      src="/icons/git-icon.svg"
                      alt="git icon"
                      width={22}
                      height={22}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </Section>

        <Section threshold={[0.27]}>
          <section
            id="project-showcase"
            className={styles.sectionContainer}
            aria-label="Showcase projects that have been created by Jorge A. Mendoza"
          >
            <div className={styles.titleContainer}>
              <h2
                className={`${sourceSansPro.className} ${styles.showcaseTitle}`}
              >
                Project Showcase
              </h2>
            </div>

            <ul className={styles.showcaseProjects}>
              {showcaseInformation.map((showcase) => (
                <FeatureCard key={showcase.id} project={showcase} />
              ))}
            </ul>
          </section>
        </Section>

        <Section threshold={[0.25, 0.13]}>
          <section
            id="other-projects"
            className={styles.sectionContainer}
            aria-label="Other projects created by Jorge A. Mendoza"
          >
            <div className={styles.titleContainer}>
              <h2
                className={`${sourceSansPro.className} ${styles.projectsTitle}`}
              >
                Other Projects
              </h2>
            </div>

            <ul className={styles.projects}>
              {projectsInformation.map((project, i) => (
                <ProjectCard key={project.id} index={i} project={project} />
              ))}
            </ul>
          </section>
        </Section>

        <Section threshold={[0.35]}>
          <section
            id="contact-me"
            className={styles.sectionContainer}
            aria-label="Information about getting in Contact with Jorge A. Mendoza"
          >
            <div className={styles.contactContent}>
              <div>
                <div
                  className={`${styles.titleContainer} ${sourceSansPro.className}`}
                >
                  <h2 className={styles.contactTitle}>Let&#39;s Collaborate</h2>
                </div>

                <p>
                  I am currently looking for opportunies to{' '}
                  <em>learn and grow</em> in the web development industry, my
                  inbox is always open! If you have any questions or just want
                  to say hello, please feel free to contact me with the email
                  link below. Please be sure to check out my social media
                  profiles as well! <strong>Happy coding!</strong>
                </p>
              </div>

              <div className={styles.contactEmail}>
                <a
                  href="mailto:jorgemendozadevii@gmail.com"
                  target="_blank"
                  rel="nonreferrer"
                  className={`${spaceMono.className} ${styles.contactEmailLink}`}
                >
                  lets chat!
                </a>
              </div>

              <nav aria-label="social media navigation">
                <ul className={styles.contactSocialList}>
                  <li>
                    <a
                      href="https://github.com/JorgeAMendoza"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="visit my github profile"
                    >
                      <GitHubIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/JorgeMIIDev"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="check out my twitter profile"
                    >
                      <TwitterIcon />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.linkedin.com/in/jorge-mendoza-a06b45264/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="visit my linkedin profile"
                    >
                      <LinkedinIcon />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </section>
        </Section>

        <Section threshold={[0.35]}>
          {' '}
          <footer className={styles.footer}>
            <div className={styles.footerName}>
              <p>Designed and built by Jorge A. Mendoza II</p>
              <p className={styles.footerIcon}>
                <a
                  href="https://www.lapoflove.com/pet-memorial/24847"
                  aria-label="A memorial for one of the greatest friends a boy can ask for"
                  target="_blank"
                  rel="noreferrer"
                >
                  <DogIcon />
                </a>
              </p>
            </div>
          </footer>
        </Section>
      </main>
    </Layout>
  );
}
