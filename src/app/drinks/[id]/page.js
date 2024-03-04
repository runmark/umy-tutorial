import Image from "next/image";
import Link from "next/link";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (id) => {
    const response = await fetch(`${url}${id}`);
    if (!response.ok) {
        throw new Error("sth went wrong");
    }

    return response.json();
}

const SingleDrink = async ({ params }) => {

    const data = await getSingleDrink(params.id);

    // console.log(data);

    const title = data?.drinks[0]?.strDrink;
    const imgSrc = data?.drinks[0]?.strDrinkThumb;


    return (
        <div>
            <Link href="/drinks"
                className="btn btn-primary mt-8 mb-12">
                BACK TO DRINKS
            </Link>

            <Image src={imgSrc} width={300} height={300}
                className="w-48 h-48 mb-4 rounded-lg shadow-lg"
                priority
                alt={title}
            />

            <h1 className="text-4xl mb-8">{title}</h1>
        </div >
    );
}

export default SingleDrink;