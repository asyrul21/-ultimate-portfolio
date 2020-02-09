import React from 'react'
import App from 'next/app'

//import global style
import '../styles/main.global.scss'

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