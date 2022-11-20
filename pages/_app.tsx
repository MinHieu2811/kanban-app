import '../styles/globals.css'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material'
import { theme, createEmotionCache } from '@/utils/index'
import { EmptyLayout } from 'components/layout'
import { AppPropsWithLayout } from '@/models/layout'

const clientSideEmotionCache = createEmotionCache()

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  )
}
export default MyApp
