import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import Image from 'next/image';
import FeatureCard from '@/components/FeatureCard/FeatureCard';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { GetStaticProps } from 'next';
import { getProjectInfo, getShowcaseInfo } from '@/lib/get-project-info';
import { Source_Sans_Pro, Space_Mono } from 'next/font/google';
import styles from '../styles/index.module.css';

const SourceSansPro = Source_Sans_Pro({
  subsets: ['latin'],
  weight: ['600', '400', '300'],
});

const SpaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400'],
});

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
        <title>Jorge Mendoza</title>
        <meta
          name="description"
          content="Portfolio website createdy by and for Jorge Mendoza"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.homeHeader}>
          <section id="home-header" className={styles.sectionContainer}>
            <div className={styles.headerContent}>
              <div
                className={`${SourceSansPro.className} ${styles.headerTitle}`}
              >
                <p className={styles.headerIntro}>Hey 🙋🏽‍♂️, my name is</p>
                <h1 className={styles.headerTitleText}>
                  Jorge Mendoza II
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
                          src="/icons/location-icon.svg"
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
                          src="/icons/school-icon.svg"
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
                  A Front-End Developer from Dallas, TX. I am currently working
                  with the Dallas Independent School District as a campus-based
                  technician, looking to launch my web development career.
                </p>
              </div>

              <a
                href="#project-showcase"
                className={`${SpaceMono.className} ${styles.headerProjectLink}`}
              >
                Check out my projects!
              </a>
            </div>
          </section>
        </div>
        <div className={styles.about}>
          <section
            id="about-me"
            className={styles.sectionContainer}
            data-bar="right"
          >
            <div className={styles.titleContainer}>
              <h2 className={`${SourceSansPro.className} ${styles.aboutTitle}`}>
                About Me
              </h2>
            </div>

            <div className={styles.aboutImage}>
              <Image
                src="/placeholder.jpg"
                width={500}
                height={500}
                alt="image of jorge mendoza"
              />
            </div>

            <div className={styles.aboutContent}>
              <div className={styles.aboutText}>
                <h3 className={SourceSansPro.className}>My Story</h3>
                <p>
                  An aspiring Front-end Developer looking for opportunities to
                  learn and grow. In my last year of college I took an
                  introduction to web-development course, and since then I have
                  continued to improve as developer and learn more of the latest
                  advances in the web-development environment.
                </p>
                <p>
                  I have used <em>React, TypeScript, Styled-Components</em> and
                  other tools to create user-interfaces that are responsive,
                  performant, and accessible. From creating password generators
                  to full-stack applications with authentication, I have a set
                  of skills that allow me to tackle multiple issues dealing
                  with creating user interfaces.
                </p>
                <p>
                  I am currently open to job opportunities where I can
                  <em> contribute, learn, and grow</em> as a software developer
                  and person. If you believe that I am a developer that will
                  mesh will with your team and goals, please feel free to
                  contact me.
                </p>
              </div>
              <div>
                <h3 className={SourceSansPro.className}>Skills & Tech</h3>
                <ul className={`${SpaceMono.className} ${styles.skillsList}`}>
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
                    CSS
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
        </div>
        <div className={styles.showcase}>
          <section id="project-showcase" className={styles.sectionContainer}>
            <div className={styles.titleContainer}>
              <h2
                className={`${SourceSansPro.className} ${styles.showcaseTitle}`}
              >
                Project Showcase
              </h2>
            </div>

            <div className={styles.showcaseProjects}>
              {showcaseInformation.map((showcase) => (
                <FeatureCard key={showcase.id} project={showcase} />
              ))}
            </div>
          </section>
        </div>
        <div className={styles.projectsSection}>
          <section id="other-projects" className={styles.sectionContainer}>
            <div className={styles.titleContainer}>
              <h2
                className={`${SourceSansPro.className} ${styles.projectsTitle}`}
              >
                Other Projects
              </h2>
            </div>

            <div className={styles.projects}>
              {projectsInformation.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        </div>
        <div className={styles.footerSection}>
          <footer id="contact-me" className={styles.sectionContainer}>
            <div className={styles.footerContent}>
              <div>
                <div
                  className={`${styles.footerTitle} ${SourceSansPro.className}`}
                >
                  <p>Interested?</p>
                  <h2>Let&#39;s Collaborate</h2>
                </div>

                <p>
                  Want to get in touch? Please feel free to contact me with any
                  of the links below and be sure to check out my resume.{' '}
                  <strong>Happy coding!</strong>
                </p>
              </div>

              <div>
                <ul className={styles.footerSocialList}>
                  <li>
                    <a
                      href="https://github.com/JorgeAMendoza"
                      target="_blank"
                      rel="noreferrer"
                      className={styles.footerSocialItem}
                    >
                      <Image
                        src="/icons/github-icon.svg"
                        alt="github icon"
                        width={30}
                        height={30}
                      />{' '}
                      Github Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto: jorgemendozadevii@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className={styles.footerSocialItem}
                    >
                      <Image
                        src="/icons/email-icon.svg"
                        alt="email icon"
                        width={30}
                        height={30}
                      />{' '}
                      Send Email
                    </a>
                  </li>
                  <li>
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className={styles.footerSocialItem}
                    >
                      <Image
                        src="/icons/resume-icon.svg"
                        alt="resume icon"
                        width={30}
                        height={30}
                      />{' '}
                      View my resume
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/jorge-mendoza-a06b45264/"
                      target="_blank"
                      rel="noreferrer"
                      className={styles.footerSocialItem}
                    >
                      <Image
                        src="/icons/linkedin-icon.svg"
                        alt="linkedin icon"
                        width={30}
                        height={30}
                      />{' '}
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.footerName}>
              <p>Designed and built by Jorge A. Mendoza II</p>
            </div>
          </footer>
        </div>
      </main>
    </Layout>
  );
}
