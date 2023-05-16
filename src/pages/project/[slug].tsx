import Layout from '@/components/Layout/Layout';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import LinkIcon from '@/components/Icons/Link';
import GitHubIcon from '@/components/Icons/GitHub';
import Image from 'next/image';

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
  };
}

const ShowcasePage = ({
  source,
  frontMatter,
}: ShowcasePageProps): InferGetStaticPropsType<typeof getStaticProps> => {
  return (
    <Layout>
      <main>
        <section>
          <h1>{frontMatter.title}</h1>
          <div>
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

          <div>
            <p>Stack</p>
            <ul>
              {frontMatter.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>

          <Image
            src={frontMatter.projectImage}
            fill={true}
            alt={`gif of ${frontMatter.title} being used`}
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
    paths: slugs.map((s) => ({ params: { slug: s.slug } })), // { params: { slug: 'my-first-post' } }
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
  const mdxSource = await serialize(project, { parseFrontmatter: true });

  return {
    props: {
      source: mdxSource,
      frontMatter: mdxSource.frontmatter,
    },
  };
};

export default ShowcasePage;
