import { useLoading, Audio  } from "@agney/react-loading";
import { useParams } from "react-router-dom"
import Card from "../components/Card";
import { useSearchProductQuery } from "../redux/services/productApi";

const SearchResults = () => {
    const { searchTerm } = useParams();
    const { data = [], isLoading } = useSearchProductQuery(searchTerm);
    const { containerProps, indicatorEl } = useLoading({
        loading: isLoading,
        indicator: <Audio width="50" />
    })
    return (
        <main className="wrapper" style={{ margin: '0 1.5em'}}>
            <br />
            <h1>Search Results</h1>
            <h2> Term: {searchTerm} </h2>
            <br />
            {(data.length === 0 && !isLoading) ? (
                <h3>No Products Found, try again</h3>
            ) : null}
             <div className="product-grid">
                {isLoading ? 
                ( 
                <section {...containerProps} >
                    { indicatorEl }
                    <h2>Loading please wait ...</h2>
                </section>
                ):
                data?.map(item => {
                    const { sale, img, _id, title, quantity, price, desc } = item;

                    return <Card key={_id} {...{sale, img, _id, title, quantity, price, desc }} />
                })}
            </div>

        </main>
    )
}

export default SearchResults