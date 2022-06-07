import { useParams } from "react-router-dom"
import Card from "../components/Card";
import { useSearchProductQuery } from "../redux/services/productApi";

const SearchResults = () => {
    const { searchTerm } = useParams();
    const { data = [] } = useSearchProductQuery(searchTerm);
    return (
        <main className="wrapper">
            <br />
            <h1>Search Results</h1>
            <h2> Term: {searchTerm} </h2>
            <br />
            {data.length === 0 ? (
                <h3>No Products Found, try again</h3>
            ) : null}
            <div className="product-grid">
                {data?.map(item => {
                    const { sale, img, _id, title, quantity, price, desc } = item;

                    return <Card key={_id} {...{sale, img, _id, title, quantity, price, desc }} />
                })}
            </div>

        </main>
    )
}

export default SearchResults