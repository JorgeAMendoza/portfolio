import Layout from '@/components/Layout/Layout';
import TableOfContents from '@/components/TableOfContents/TableOfContents';
import { sourceSansPro, spaceMono } from '@/utils/fonts';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import path from 'path';
import rehypeSlug from 'rehype-slug';
import style from '../../styles/project-page.module.css';

interface ShowcasePageProps {
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
  frontMatter: {
    title: string;
    tools: string[];
    repoLink: string;
    demoLink: string;
    video: {
      webm: string;
      mp4: string;
      poster: string;
    };
    tableOfContents: {
      sectionID: string;
      subSections?: string[];
    }[];
  };
}

const ShowcasePage = ({
  source,
  frontMatter,
}: ShowcasePageProps): InferGetStaticPropsType<typeof getStaticProps> => {
  return (
    <Layout>
      <Head>
        <title>{frontMatter.title} | Jorge A. Mendoza</title>
        <meta
          name="description"
          content={`Project details for the ${frontMatter.title} application created by Jorge A. Mendoza`}
        />
      </Head>

      <main className={style.projectPage}>
        <TableOfContents tableOfContents={frontMatter.tableOfContents} />
        <section
          className={style.projectHead}
          aria-label={`General information about the ${frontMatter.title} project`}
        >
          <div>
            <h1 className={`${sourceSansPro.className} ${style.projectTitle}`}>
              {frontMatter.title}
            </h1>
            <nav
              className={`${sourceSansPro.className} ${style.projectLinks}`}
              aria-label="links to project repository and live demo"
            >
              <a href={frontMatter.repoLink} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={frontMatter.demoLink} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </nav>
          </div>

          <div className={style.projectTools}>
            <p className={sourceSansPro.className}>Tools</p>
            <ul
              className={`${spaceMono.className}`}
              aria-label="tools used in this project"
            >
              {frontMatter.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>

          <div className={style.projectVideoContainer}>
            <video
              loop
              autoPlay
              muted
              poster={frontMatter.video.poster}
              preload=""
              aria-label={`video of the ${frontMatter.title} application in use`}
            >
              <source src={frontMatter.video.webm} type="video/webm" />
              <source src={frontMatter.video.mp4} type="video/mp4" />
              <p>Video is not supported on your browser</p>
            </video>
          </div>
        </section>

        <section
          className={style.projectContent}
          aria-label={`detailed explanation of the ${frontMatter.title} development`}
        >
          <MDXRemote
            {...source}
            components={{
              a: (props) => (
                <a {...props} target="_blank" rel="noreferrer">
                  {}
                </a>
              ),
            }}
          />
        </section>
      </main>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const projectDirectory = path.join(process.cwd(), 'src', 'projects');
  const filenames = fs.readdirSync(projectDirectory);

  const slugs = filenames.map((name) => {
    const filePath = path.join(projectDirectory, name);
    const file = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(file);
    return data;
  });
  return {
    paths: slugs.map((s) => ({ params: { slug: s.slug } })),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || params.slug === undefined) throw new Error('Invalid page');
  const projectDirectory = path.join(
    process.cwd(),
    'src',
    'projects',
    params.slug + '.mdx'
  );
  const project = fs.readFileSync(projectDirectory, 'utf8');
  const mdxSource = await serialize(project, {
    parseFrontmatter: true,
    mdxOptions: { rehypePlugins: [rehypeSlug] },
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: mdxSource.frontmatter,
    },
  };
};

export default ShowcasePage;
