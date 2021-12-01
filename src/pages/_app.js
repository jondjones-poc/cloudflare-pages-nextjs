import stylesheet from "styles/main.scss"

export default function MyApp({ Component, pageProps }) {
  const props = {...stylesheet, ...pageProps};
  return <Component {...props}/>
}