import Link from "next/link";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const getDrinkImages = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("error when fetch data!!");
    }

    return response.json();
}

const DrinksPage = async () => {

    const data = await getDrinkImages();
    console.log(data);

    return (
        <div className="text-7xl">
            DrinksPage

            <Link href="/" className="text-2xl">HomePage</Link>
        </div>
    );
}

export default DrinksPage;