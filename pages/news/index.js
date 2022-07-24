import Head from 'next/head'
import newss from '../../styles/News.module.css'
import Link from 'next/link'

//FETCH API 
export const getStaticProps = async() => {
    const res = await fetch('https://gorest.co.in/public/v2/posts');
    const data = await res.json();

    return {
        props: { news: data}
    }
}


const News = ({ news }) => {
    return ( 
        <>
        <Head>
            <title>News | Berita terkini</title>
            <meta name="keyword" content="news"/>
        </Head>
        <div>
            <h1>
                All News
            </h1>
            {news.map(news => (
                <Link href={'/news/' + news.id}  key={news.id}>
                    <a className={newss.single}>
                        <h3>{ news.title }</h3>
                    </a>
                </Link>
            ))}
        </div>
        </>
     );
}
 
export default News;