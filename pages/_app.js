import '@/styles/globals.css'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const goToHome = () => {
    router.push("/");
  }
  const goToAbout = () => {
    router.push("/about")
  }
  return (
    <div>
      <h1>Header</h1>
      <div onClick={goToHome}>Home</div>
      <div onClick={goToAbout}>about</div>
      <Component {...pageProps} />
      <h1>Footer</h1>
    </div>
  )
}
