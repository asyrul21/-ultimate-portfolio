import react from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import cx from 'classnames';
import axios from 'axios';

// import layouts
import ContentLayout from '../components/layouts/ContentLayout'
import ContentContainer from '../components/layouts/ContentContainer'
import BlogsLayout from '../components/layouts/BlogsLayout'

//import components
import ContentHead from '../components/shared/ContentHead'
import BlogsComponent from '../components/blogs/BlogsComponent'

//global styles can be found at ../styles/main.scss
//import specific styling module
import blogsStyles from './styles/blogs.module.scss'

//React Reveal Animation
import Fade from 'react-reveal/Fade';

// import data
import contentHeadData from '../public/static/data/contentHeads.json'
import blogsData from '../public/static/data/blogs.json'

// Contentful
const accessToken = 'qNAIl9wpOsGdiubqByf_0zooYVBGeIQDYKnK3H3UfTQ';
const spaceID = 'wohzmwn5yil6'
const envID = 'master';

// Wordpress.com API
const baseURL = 'https://public-api.wordpress.com/rest/v1.1/sites/';
const site = 'asyrulhafetzy.wordpress.com/posts';
const order = '?order_by=date&order=DESC';
let PostLimit = '&number='

class Blogs extends react.Component {
    constructor() {
        super()
        this.state = {
            limit: 3
        }

        this.onLoadMore = this.onLoadMore.bind(this);
    }

    static async getInitialProps() {
        // Make request for posts.
        // https://wordpress.test/wp-json/wp/v2/posts
        // https://public-api.wordpress.com/rest/v1.1/sites/asyrulhafetzy.wordpress.com/posts/

        const response = await axios.get(`${baseURL}${site}${order}`)

        // Return response to posts object in props.
        return {
            res: response.data
        }
    }

    onLoadMore() {
        return this.setState({ limit: ++this.state.limit });
    }

    render() {
        // access getInitialProps results
        const data = this.props.res;
        let posts = data.posts;
        // console.log(this.state.limit);

        return (
            <BlogsLayout>
                <ContentContainer>
                    <Fade delay={200}>
                        <ContentHead data={contentHeadData.blogs} />
                    </Fade>
                </ContentContainer>
                <ContentContainer>
                    <Fade delay={200}>
                        <BlogsComponent data={blogsData.blogs} posts={posts}></BlogsComponent>
                    </Fade>
                    {/* <div className={blogsStyles.loadmoreButton} onClick={this.onLoadMore}>Load More</div> */}
                </ContentContainer>
            </BlogsLayout>
        )
    }
}

export default Blogs;


// try {
//     // 'https://wordpress.test/wp-json/wp/v2/posts'
//     const response = await fetch('https://asyrulhafetzy.wordpress.com/wp-json/wp/v2/posts');
//     if (response) {
//         return { posts: response.data };
//         // posts = await response.json();
//     }
//     else {
//         console.log('Response is undefined.')
//     }
// } catch (err) {
//     console.log(err);
// }
// return { posts: null };
// // return { posts: posts.splice(0, 10) };


// https://cdn.contentful.com/spaces/wohzmwn5yil6/environments/master/entries?access_token=qNAIl9wpOsGdiubqByf_0zooYVBGeIQDYKnK3H3UfTQ&order=-sys.updatedAt

// const response = await axios.get(`https://cdn.contentful.com/spaces/${spaceID}/environments/${envID}/entries?access_token=${accessToken}&order=-sys.updatedAt`)

