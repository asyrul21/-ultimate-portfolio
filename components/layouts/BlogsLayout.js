import react from 'react';
import ContentLayout from './ContentLayout'
import cx from 'classnames'

const BlogsLayout = (props) => {
    return (
        <react.Fragment>
            <ContentLayout>
                <div className={cx('hero', 'blogsHero')}></div>

                {props.children}
            </ContentLayout>
            <style jsx>{`
                .blogsHero {
                    background-image: url('/static/images/hero/blogs.png');
                    //height: 600px;
                }
            `}</style>
        </react.Fragment>
    )
}

export default BlogsLayout;