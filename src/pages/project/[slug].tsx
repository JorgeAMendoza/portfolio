import GitHubIcon from '@/components/Icons/GitHub';
import LinkIcon from '@/components/Icons/Link';
import Layout from '@/components/Layout/Layout';
import TableOfContents from '@/components/TableOfContents/TableOfContents';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { Source_Sans_Pro, Space_Mono } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import path from 'path';
import rehypeSlug from 'rehype-slug';
import style from '../../styles/project-page.module.css';

const SpaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400'],
});

const SourceSansPro = Source_Sans_Pro({
  subsets: ['latin'],
  weight: ['400', '600'],
});

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
      </Head>

      <main className={style.projectPage}>
        <TableOfContents tableOfContents={frontMatter.tableOfContents} />
        <section className={style.projectHead}>
          <div className={style.projectTitleInfo}>
            <h1 className={`${SourceSansPro.className} ${style.projectTitle}`}>
              {frontMatter.title}
            </h1>
            <div className={style.projectLinks}>
              <a
                href={frontMatter.repoLink}
                aria-label={`github repository for ${frontMatter.title}`}
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
              <a
                href={frontMatter.demoLink}
                aria-label={`demo link for ${frontMatter.title}`}
                target="_blank"
                rel="noreferrer"
              >
                <LinkIcon />
              </a>
            </div>
          </div>

          <div className={style.projectTools}>
            <p className={SourceSansPro.className}>Tools Used</p>
            <ul className={`${SpaceMono.className}`}>
              {frontMatter.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>

          <div className={style.projectImageContainer}>
            <Image
              src={frontMatter.projectImage}
              width={400}
              height={325}
              alt={`image of ${frontMatter.title}`}
              className={style.projectImage}
              priority={true}
            />

            <Image
              src={frontMatter.projectGif}
              width={900}
              height={500}
              alt={`gif of ${frontMatter.title} being used`}
              className={style.projectGif}
              priority={true}
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
