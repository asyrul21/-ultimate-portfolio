import react from 'react';
import bloglistStyles from './blogslist.module.scss'
import Link from 'next/link'
// moment
const moment = require('moment');

const BlogsList = (props) => {
    return (
        <react.Fragment>
            {/* {props.data.map((item, idx) => { */}
            {props.posts.map((item, idx) => {
                let itemText = item.content.replace(/(<([^>]+)>)/ig, '');
                itemText = itemText.slice(0, 500);
                let date = moment(item.date).format('dddd, Do MMMM, YYYY');
                return (
                    <div key={item.ID} className={bloglistStyles.blogItem}>
                        <Link href={`/blog/${item.slug}`}>
                            <a href={`/blog/${item.slug}`}>
                                <p className={bloglistStyles.title}>{item.title}</p>
                            </a>
                        </Link>
                        {/* <p className={bloglistStyles.author}>Author: <span className={bloglistStyles.name}>{item.author.name}</span></p> */}
                        <p className={bloglistStyles.publish}>Published on : <span className={bloglistStyles.date}>{date}</span></p>
                        <p className={bloglistStyles.publish}>Likes : <span className={bloglistStyles.date}>5</span></p>
                        <p>{itemText}...{' '}
                            <span className={bloglistStyles.readmore}>
                                <Link href={`/blog/${item.slug}`}>
                                    <a href={`/blog/${item.slug}`}>READ MORE</a>
                                </Link>
                            </span>
                        </p>
                    </div>
                )
            })}
        </react.Fragment>
    )
}

export default BlogsList;