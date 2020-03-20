import react from 'react';
import Link from 'next/link';
import BaseLayout from '../components/layouts/BaseLayout'
import fetch from 'isomorphic-unfetch';

//global styles can be found at ../styles/main.scss
//import specific styling module
//import blogsStyles from './blogs.module.scss'

class Blogs extends react.Component {

    static async getInitialProps() {
        let posts = [];

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            posts = await response.json();
        } catch (err) {
            console.log(err);
        }

        return { posts: posts.splice(0, 10) };
    }

    renderPosts(posts) {
        return posts.map((post) => {
            return (
                // every iterated react item needs to have a key
                <li key={post.id}>
                    <Link as={`/blogs/${post.id}`} href="/blogs/[id]">
                        <a>{post.title}</a>
                    </Link>
                </li>
            )
        }
        )
    }

    render() {
        // console.log(this.props.posts);
        const posts = this.props.posts;

        return (
            <BaseLayout>
                <h1>This is the Blogs Page</h1>
                <ul>
                    {
                        this.renderPosts(posts)
                    }
                </ul>
            </BaseLayout>
        )
    }
}

export default Blogs;