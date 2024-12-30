import type ICategory from "@/interfaces/ICategory";
import type IReceipt from "@/interfaces/IReceipt";

async function getURLData<T>(url: string){
    const response = await fetch(url);

    return response.json() as T;
}

export async function getCategories(){
    return getURLData<ICategory[]>(
        "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json",
    );
}

export async function getReceipts(){
    return getURLData<IReceipt[]>(
        "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json",
    );
}