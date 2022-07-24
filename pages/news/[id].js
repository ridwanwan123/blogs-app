export const getStaticPaths = async () => {
    const res = await fetch('https://gorest.co.in/public/v2/posts');
    const data = await res.json();

    const paths = data.map(news => {
        return {
            params: { id: news.id.toString() }
        }
    })

    return  {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://gorest.co.in/public/v2/posts/' + id);
    const data  = await res.json();

    return {
        props: { news: data }
    }
}

const Details = ({ news }) => {
    return ( 
        <div>
            <h1>{ news.title }</h1>
            <p>{ news.body}</p> <br></br>
            <p>{ news.user_id }</p>

        </div>
     );
}
 
export default Details;