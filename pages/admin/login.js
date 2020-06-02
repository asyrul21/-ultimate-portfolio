import react from 'react';
import cx from 'classnames'
import Head from 'next/head'
import axios from 'axios';

// import layouts
import ContentLayout from '../../components/layouts/ContentLayout'
import ContentContainer from '../../components/layouts/ContentContainer'
import ContentsList from '../../components/admin/ContentsList'

//React Reveal Animation
import Fade from 'react-reveal/Fade';


//global styles can be found at ../styles/main.scss
//import specific styling module
import aboutStyles from '../styles/about.module.scss';
import loginStyles from './login.module.scss';

class Login extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            invalidLogin: false,
            admin: '',
            loggedIn: true,
            id: '',
            pw: ''
        };

        this.handleIDChange = this.handleIDChange.bind(this);
        this.handlePWChange = this.handlePWChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    static async getInitialProps(ctx) {
        const res = await axios.get('https://ultimate-express.herokuapp.com/content/')
        if (res) {
            return {
                content: res.data
            }
        }
    }

    handleIDChange(event) {
        if (event)
            this.setState({ id: event.target.value });
    }

    handlePWChange(event) {
        if (event)
            this.setState({ pw: event.target.value });
    }

    async handleSubmit(event) {
        event.preventDefault();
        console.log('ID submitted: ' + this.state.id);
        console.log('PW submitted: ' + this.state.pw);
        let details = {
            name: this.state.id,
            password: this.state.pw
        }
        console.log('Details:', details);
        const res = await axios.post('https://ultimate-express.herokuapp.com/login/', details)
            .catch((error) => {
                console.log('Error occured:', error);
                return false;
            })

        if (!res) {
            return this.setState({
                invalidLogin: true
            })
        } else {
            this.setState({
                invalidLogin: false,
                admin: res.data.admin.name,
                loggedIn: true,
                id: '',
                pw: ''
            })
        }
    }

    async handleLogout() {
        const res = await axios.get('https://ultimate-express.herokuapp.com/logout/')
        console.log(res.data);

        return this.setState({
            // reset
            invalidLogin: false,
            admin: '',
            loggedIn: false,
            id: '',
            pw: ''
        })
    }

    render() {
        // console.log('Content:', this.props.content);
        return (
            <ContentLayout>
                <section>
                    <Fade>
                        <div className={cx('fallback', aboutStyles.herofallback)}>
                            <div className={cx('hero', aboutStyles.aboutHero)}></div>
                        </div>
                    </Fade>
                </section>
                {this.state.loggedIn &&
                    <p className={loginStyles.sessionText}>Logged in as {this.state.admin}. <a onClick={this.handleLogout}>Logout</a></p>
                }
                <section>
                    <ContentContainer>
                        <h2>Admin Login</h2>
                        {this.state.invalidLogin &&
                            <p className={loginStyles.loginError}>Login Failed.</p>
                        }
                        {
                            !this.state.loggedIn &&
                            <Fade>
                                <form onSubmit={this.handleSubmit} className={loginStyles.form}>
                                    <input type="text" value={this.state.id} onChange={this.handleIDChange} placeholder="ID" className={loginStyles.input} required />
                                    <input type="password" value={this.state.pw} onChange={this.handlePWChange} placeholder="Password" className={loginStyles.input} required />

                                    <input type="submit" value="Submit" className={loginStyles.submitButton} />
                                </form>
                            </Fade>
                        }
                        {
                            this.state.loggedIn &&
                            <Fade>
                                <ContentsList data={this.props.content} />
                            </Fade>
                        }
                    </ContentContainer>
                </section>
            </ContentLayout>
        )
    }
}
export default Login;