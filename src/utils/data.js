// fichier global des fonctions de fetch
import { useSearchParams } from "next/navigation";

export async function fetchCategories(id) {

    // const params = useSearchParams();
    // const id = params.get("id");
    try {
        const dataFetched = await fetch(`http://127.0.0.1:9090/furnitures/category?id=${id}`);
        const data = await dataFetched.json();
        console.log(data);

        return data
    } catch (error) {
        console.log(error)
    }
}

const fetcher = (...args) => fetch(...args).then(res => res.json())
export function anyFetch(id) {
    const { data, error, isLoading } = useSWR(`http://127.0.0.1:9090/furnitures/category?id=${id}`, fetcher)

    return {
        user: data,
        isLoading,
        isError: error
    }
}

export async function fetchItem(id) {
    const url = `http://127.0.0.1:9090/furnitures/?${id}`;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status ${response.status}`);
        }
        const item = await response.json();
        console.log(item);
        return item;


    } catch (error) {
        console.log(error.message);
    }
}
//exportation de la fonction
//export default { fetchItem };