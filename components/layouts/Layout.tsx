import { useRouter } from 'next/router';
import { FC } from 'react';
import Head from 'next/head';

import { Navbar } from '../ui';

interface LayoutProps {
    children: JSX.Element;
    title?: string;
}

const origin = ( typeof window === 'undefined' ) ? '' : window.location.origin;


export const Layout: FC<LayoutProps> = ({ children, title }) => {



  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name="author" content='Yoser Rodriguez' />
            <meta name="description" content={ `Información sobre el pokemon ${ title }` } />
            <meta name="keywords" content={ `${ title }, pokemon, pokedex` }/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <meta property="og:title" content={`Informacin sobre ${ title }`} />
            <meta property="og:description" content={`Esta es la pagina sobre ${ title }`} />
            <meta property="og:image" content={`${ origin }/img/banner.png`} />
        </Head>

        {/**  navbar   */}
        <Navbar />
        

        <main style={{
            padding: '0px 20px',
        }}>
            { children }
        </main>
    </>
  )
}
