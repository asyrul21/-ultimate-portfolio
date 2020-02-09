import react from 'react';
import Link from 'next/Link';
import BaseLayout from '../components/layouts/BaseLayout'
import ContentHead from '../components/shared/ContentHead'
import cx from 'classnames'

//global styles can be found at ../styles/main.scss
//import specific styling module
import aboutStyles from './styles/about.module.scss';

class About extends react.Component {

    render() {
        return (
            <BaseLayout>
                <div className={cx('hero', aboutStyles.aboutHero)}></div>
                <ContentHead
                    content={
                        {
                            title: 'Hi, nice to meet you!',
                            quote: '“One machine can do the work of fifty ordinary men. \
                            No machine can do the work of one extraordinary”',
                            author: 'Thomas A. Edison',
                            text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. \
                            It has roots in a piece of classical Latin literature from 45 BC, making\
                            it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney\
                            College in Virginia, looked up one of the more obscure Latin words, consectetur,\
                            from a Lorem Ipsum passage, and going through the cites of the word in classical\
                            literature, discovered the'
                        }
                    }
                />
                <div className={cx('hero', aboutStyles.skillHero)}></div>
                <ContentHead
                    content={
                        {
                            title: 'Skills and Specialties',
                            quote: '“One machine can do the work of fifty ordinary men. \
                            No machine can do the work of one extraordinary”',
                            author: 'Thomas A. Edison',
                            text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. \
                            It has roots in a piece of classical Latin literature from 45 BC, making\
                            it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney\
                            College in Virginia, looked up one of the more obscure Latin words, consectetur,\
                            from a Lorem Ipsum passage, and going through the cites of the word in classical\
                            literature, discovered the'
                        }
                    }
                />
                <div className={cx('hero', aboutStyles.workHero)}></div>
                <ContentHead
                    content={
                        {
                            title: 'Work Experience',
                            quote: '“One machine can do the work of fifty ordinary men. \
                            No machine can do the work of one extraordinary”',
                            author: 'Thomas A. Edison',
                            text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. \
                            It has roots in a piece of classical Latin literature from 45 BC, making\
                            it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney\
                            College in Virginia, looked up one of the more obscure Latin words, consectetur,\
                            from a Lorem Ipsum passage, and going through the cites of the word in classical\
                            literature, discovered the'
                        }
                    }
                />
                <div className={cx('hero', aboutStyles.educationHero)}></div>
                <ContentHead
                    content={
                        {
                            title: 'Education',
                            quote: '“One machine can do the work of fifty ordinary men. \
                            No machine can do the work of one extraordinary”',
                            author: 'Thomas A. Edison',
                            text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. \
                            It has roots in a piece of classical Latin literature from 45 BC, making\
                            it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney\
                            College in Virginia, looked up one of the more obscure Latin words, consectetur,\
                            from a Lorem Ipsum passage, and going through the cites of the word in classical\
                            literature, discovered the'
                        }
                    }
                />

            </BaseLayout>
        )
    }
}

export default About;

// title='Hi, nice to meet you!'
// quote='“One machine can do the work of fifty ordinary men. 
// No machine can do the work of one extraordinary”'
// author='Thomas A. Edison'
// text='Contrary to popular belief, Lorem Ipsum is not simply random text.
// It has roots in a piece of classical Latin literature from 45 BC, making
// it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
// College in Virginia, looked up one of the more obscure Latin words, consectetur,
// from a Lorem Ipsum passage, and going through the cites of the word in classical
// literature, discovered the'