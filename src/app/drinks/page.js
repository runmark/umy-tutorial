import DrinksList from "@/components/DrinksList";
import Image from "next/image";
import Link from "next/link";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const getDrinkImages = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("error when fetch data!!");
    }

    const data = await response.json();

    return data;
}

const DrinksPage = async () => {

    const data = await getDrinkImages();
    // console.log(data.drinks);

    return (
        <div>
            <DrinksList drinks={data.drinks} />
        </div>
    );
}

export default DrinksPage;