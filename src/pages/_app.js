import Layout from '@/components/layout';
import { GoogleTagManager } from '@next/third-parties/google';
import { GTM_ID } from '@/config/index.mjs';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <GoogleTagManager gtmId={GTM_ID} />
    </Layout>
  );
}
