import react from 'react'
import BlogsList from './BlogsList'

const BlogsComponent = (props) => {
    // console.log(props.posts)
    // loopTest(props.posts);
    return (
        <react.Fragment>
            <div className='blogsContainer'>
                <BlogsList data={props.data} posts={props.posts}></BlogsList>
            </div>
            <style jsx>{`
                .blogsContainer {
                    // border: blue 2px solid;
                    min-height: 300px;
                }
            `}</style>
        </react.Fragment>
    )
}

export default BlogsComponent;