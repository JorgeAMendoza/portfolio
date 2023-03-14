import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Layout from '@/components/Layout/Layout';
import Image from 'next/image';

export default function Home() {
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
      <main className={styles.main}>
        <section id="home-header">
          <div>{/* image of me */}</div>
          <div>
            <h1>Jorge A. Mendoza II</h1>
            <p>Front End Developer</p>
          </div>

          <div>
            <div>
              <p>
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
              <p>
                <span>
                  <Image
                    src="/icons/school-icon.svg"
                    alt="school icon"
                    width={30}
                    height={30}
                  />
                </span>
                University of North Texas at Dallas <br />
                BA in Information Technology
              </p>
            </div>
          </div>

          <p>
            A Front-End Developer from Dallas, TX. I am currently working with
            the Dallas Independent School District as a campus-based technician,
            looking to launch my career web development career.
          </p>
        </section>

        <div>
          {/* lighter container,  */}
          <section id="about me">
            <h2>About Me</h2>
            <div>
              <h3>My Story</h3>
              <p>
                An aspiring Front-end Developer looking for opportunities to
                learn and grow. In my last year of college I took an
                introduction to web-development course, and since then I have
                continued to improve as developer and learn more of the latest
                advances in the web-development environment.
              </p>
              <p>
                I have used React, TypeScript, Styled-Components, and other
                tools to create user-interfaces that are responsive, performant,
                and accessible. From creating password generators to full-stack
                applications with authentication, I have a set of skills that
                allow me me to tackle multiple issues dealing with creating user
                interfaces.
              </p>
              <p>
                I am currently open to job opportunities where I can contribute,
                learn, and grow as a front-end developer and person. If you
                believe that I am a developer that will mesh will with your team
                and goals, please feel free to contact me.
              </p>
              <a href="#contact-me">Contact me</a>
            </div>
            <div>
              <h3>Skills & Tech</h3>
              <ul>
                <li>
                  <Image
                    src="/icons/html5-icon.svg"
                    alt="HTML5 icon"
                    width={22}
                    height={22}
                  />
                  HTML5
                </li>
                <li>
                  <Image
                    src="/icons/css-icon.svg"
                    alt="CSS Icon"
                    width={22}
                    height={22}
                  />
                  CSS
                </li>
                <li>
                  <Image
                    src="/icons/javascript-icon.svg"
                    alt="javascript icon"
                    width={22}
                    height={22}
                  />
                  JavaScript
                </li>
                <li>
                  <Image
                    src="/icons/typescript-icon.svg"
                    alt="typescript icon"
                    width={22}
                    height={22}
                  />
                  TypeScript
                </li>
                <li>
                  <Image
                    src="/icons/react-icon.svg"
                    alt="react icon"
                    width={22}
                    height={22}
                  />
                  React
                </li>
                <li>
                  <Image
                    src="/icons/redux-icon.svg"
                    alt="redux icon"
                    width={22}
                    height={22}
                  />
                  Redux
                </li>
                <li>
                  <Image
                    src="/icons/nextjs-icon.svg"
                    alt="next js icon"
                    width={22}
                    height={22}
                  />
                  NextJS
                </li>
                <li>
                  <Image
                    src="/icons/nodejs-icon.svg"
                    alt="node js icon"
                    width={22}
                    height={22}
                  />
                  NodeJS
                </li>
                <li>
                  <Image
                    src="/icons/graphql-icon.svg"
                    alt="graphql icon"
                    width={22}
                    height={22}
                  />
                  GraphQL
                </li>
                <li>
                  <Image
                    src="/icons/docker-icon.svg"
                    alt="docker icon"
                    width={22}
                    height={22}
                  />
                  Docker
                </li>
                <li>
                  <Image
                    src="/icons/mongodb-icon.svg"
                    alt="mongodb icon"
                    width={22}
                    height={22}
                  />
                  MongoDB
                </li>
                <li>
                  <Image
                    src="/icons/git-icon.svg"
                    alt="git icon"
                    width={22}
                    height={22}
                  />
                  Git
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
