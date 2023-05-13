import path from 'path';
import fs from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { GetStaticProps, GetStaticPaths } from 'next';
import matter from 'gray-matter';
import { InferGetStaticPropsType } from 'next';
import Layout from '@/components/Layout/Layout';

interface ShowcasePageProps {
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
  frontMatter: {
    title: string;
    tools: string[];
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
          <ul>
            {frontMatter.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
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
