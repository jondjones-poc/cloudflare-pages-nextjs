import BlockRenderer from '../blocks/BlockRenderer';
import { NextPage } from 'next'
// import styles from './HomePage.module.css'

import { HomePageData } from '../../models/pages';

interface Props {
    pageData? : HomePageData;
    data: string;
    userAgent: string;
}

const HomePage: NextPage<Props> = ({ pageData, data, userAgent}) => (
    <>
        <main>
            <h2>
                Content Area Data
            </h2>
            <div>
                {pageData.mainContentArea?.map(({ contentLink }, k) => (
                    <BlockRenderer blockData={contentLink.expanded} key={k} />
                ))}
            </div>
            <div>
                Cloudflare Data {userAgent}
            </div>
        </main>
    </>
)

HomePage.getInitialProps = async ({ req }) => {
    const res = await fetch('https://blue-dawn-a640.jonjones.workers.dev/')
    const data = await res.text()
    return {data: data, userAgent: "kk" }
}

export default HomePage;