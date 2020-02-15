import react from 'react'
import BaseLayout from './BaseLayout'

const ContentLayout = (props) => {
    return (
        <BaseLayout>
            {props.children}
        </BaseLayout>
    )
}

export default ContentLayout;


// {props.children.map((child, idx) => {
//     console.log(child.props)
//     return (
//         <section key={idx} className='contentSection'>
//             {/* {child.props.children.map((grandchild) => {
//                 return (
//                     { grandchild }
//                 )
//             })} */}
//         </section>
//     )
// })}