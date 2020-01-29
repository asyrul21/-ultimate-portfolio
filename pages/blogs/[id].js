import react from 'react';
import Link from 'next/Link';
import BaseLayout from '../../components/layouts/BaseLayout'

// works with withRouter. useRouter giving Hook errors
// import { useRouter } from 'next/router';
import { withRouter } from 'next/router';

//global styles can be found at ../styles/main.scss
//import specific styling module
//import blogStyles from './blog.module.scss'

class Blog extends react.Component {

    static async getInitialProps(context) {
        let post = {};
        const postId = context.query.id;

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            post = await response.json();
        } catch (err) {
            console.log(err);
        }
        return { post }; //similar to return {post : post} //same key value pair
    }


    render() {
        // const router = useRouter();
        const { post } = this.props;

        return (
            <BaseLayout>
                <h1>{post.title}</h1>
                <h2>{post.body}</h2>
                <p>{post.id}</p>
            </BaseLayout>
        )
    }
}

export default withRouter(Blog);