import React from 'react'
import App from 'next/app'

//import styles
import '../styles/main.scss'

class MyApp extends App {
    static async getInitialProps(appContext) {
        const appProps = await App.getInitialProps(appContext);
        return { ...appProps }
    }

    render() {
        const { Component, pageProps } = this.props
        return (
            <Component {...pageProps} />
        )
    }
}



export default MyApp