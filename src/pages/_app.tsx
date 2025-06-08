import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {memo} from 'react';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      <div 
        id="global-bg"
        style={{
          position: 'fixed',
          zIndex: 0,
          inset: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: `url('/images/Sea_Landscape.webp'), url('/images/profilepic.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          pointerEvents: 'none',
        }}
      />
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;
