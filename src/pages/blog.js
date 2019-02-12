import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const BlogPage = ({ data }) => (
    <Layout>
        <h2 style={{ textDecoration: 'underline' }}>Latest Post</h2>
        {data.allMarkdownRemark.edges.map(post => (
            <div key={post.node.id}>
                <h3>{post.node.frontmatter.title}</h3>
                <small>Posted By {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                <br />
                <br />
                <Link
                    to={post.node.frontmatter.path}
                    style={{
                        backgroundColor: 'lightblue',
                        padding: '5px',
                        borderRadius: '5px'
                    }}
                >
                    Read More
                </Link>
                <br />
                <br />
                <hr />
            </div>
        ))}
    </Layout>
)

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark{
            edges{
                node{
                    id
                    frontmatter{
                        path
                        date
                        title
                        author
                    }
                }
            }
        }
    }
`

export default BlogPage
