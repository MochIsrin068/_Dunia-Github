import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default function Template({ data }) {
    const post = data.markdownRemark

    return (
        <Layout>
            <Link to="/blog">Go Back</Link>
            <hr />
            <h2>{post.frontmatter.title}</h2>
            <h5 style={{ color: 'coral' }}><i>Posted By {post.frontmatter.author} on {post.frontmatter.date}</i></h5>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!){
        markdownRemark(frontmatter: {path: { eq: $path }}){
            html
            frontmatter{
                path
                title
                author
                date
            }
        }
    }
`
