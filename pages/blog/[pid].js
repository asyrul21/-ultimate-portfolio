import react from 'react';
import Link from 'next/link';
import BaseLayout from '../../components/layouts/BaseLayout'
import axios from 'axios';
import cx from 'classnames';

// works with withRouter. useRouter giving Hook errors
// import { useRouter } from 'next/router';
import { withRouter } from 'next/router';

// import layouts
import ContentContainer from '../../components/layouts/ContentContainer'
import BlogsLayout from '../../components/layouts/BlogsLayout'
import BreadCrumbs from '../../components/shared/BreadCrumbs'

//React Reveal Animation
import Fade from 'react-reveal/Fade';

// moment
const moment = require('moment');

// Wordpress.com API
const baseURL = 'https://public-api.wordpress.com/rest/v1.1/sites/';
const site = 'asyrulhafetzy.wordpress.com/posts';
const order = '?order_by=date&order=DESC';
let PostLimit = '&number='

// styles
import blogStyles from './blog.module.scss'

class Blog extends react.Component {
    // constructor() {
    //     super()
    // }

    static async getInitialProps(context) {
        // console.log(context.query.pid);

        let postSlug = context.query.pid;
        const response = await axios.get(`${baseURL}${site}/slug:${postSlug}`)

        // Return response to posts object in props.
        return {
            res: response.data,
            slug: postSlug
        };
    }

    render() {
        const post = this.props.res;
        // console.log(post);
        const slug = this.props.slug;

        let date = moment(post.date).format('ddd, Do MMMM, YYYY');
        return (
            <BlogsLayout>
                <ContentContainer breadcrumbs={['Blogs', slug]}>
                    <Fade delay={200}>
                        <div className={blogStyles.header}>
                            <p className={blogStyles.top}>
                                {date}
                            </p>
                            <h3 className={blogStyles.title}>{post.title}</h3>
                            <p className={blogStyles.bottom}>
                                By {post.author.name}
                            </p>
                        </div>
                        <article
                            className={blogStyles.entryContent}
                            dangerouslySetInnerHTML={{
                                __html: post.content
                            }} />
                    </Fade>
                </ContentContainer>
            </BlogsLayout>
        )
    }
}

export default withRouter(Blog);

// try {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
//     post = await response.json();
// } catch (err) {
//     console.log(err);
// }
// return { post }; //similar to return {post : post} //same key value pair