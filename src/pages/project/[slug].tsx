import Layout from '@/components/Layout/Layout';
import TableOfContents from '@/components/TableOfContents/TableOfContents';
import { shimmer, toBase64 } from '@/lib/shimmer';
import { sourceSansPro, spaceMono } from '@/utils/fonts';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import Image from 'next/image';
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
    projectImage: string;
    projectGif: string;
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
        <title>{frontMatter.title}</title>
        <meta
          name="description"
          content={`Information for the ${frontMatter.title} project created by Jorge A. Mendoza`}
        />
      </Head>

      <main className={style.projectPage}>
        <TableOfContents tableOfContents={frontMatter.tableOfContents} />
        <section className={style.projectHead}>
          <div>
            <h1 className={`${sourceSansPro.className} ${style.projectTitle}`}>
              {frontMatter.title}
            </h1>
            <nav
              className={`${sourceSansPro.className} ${style.projectLinks}`}
              aria-label="project links"
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
            <ul className={`${spaceMono.className}`}>
              {frontMatter.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>

          <div className={style.projectImageContainer}>
            <Image
              src={frontMatter.projectGif}
              width={400}
              height={325}
              alt={`image of ${frontMatter.title}`}
              className={style.projectGifMobile}
              priority={true}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(400, 325)
              )}`}
            />

            <Image
              src={frontMatter.projectGif}
              width={900}
              height={650}
              alt={`gif of ${frontMatter.title} being used`}
              className={style.projectGif}
              priority={true}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(900, 650)
              )}`}
            />
          </div>
        </section>

        <section className={style.projectContent}>
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
