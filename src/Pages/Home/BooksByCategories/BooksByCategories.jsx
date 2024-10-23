import { useEffect, useState } from "react";


const BooksByCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("/promotionAndDiscount.json")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCategories(data);
            })
    }, [])
    return (
        <div className="mt-5">
            <h1 className="text-center">total Books : {categories.length}</h1>
        </div>
    );
};

export default BooksByCategories;