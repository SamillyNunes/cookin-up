import type ICategory from "@/interfaces/ICategory";
import type IReceipt from "@/interfaces/IReceipt";

export async function getCategories(){
    const resp = await fetch(
        "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json",
    );

    const categories: ICategory[] = await resp.json();

    return categories;
}

export async function getReceipts(){
    const resp = await fetch(
        "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json",
    );

    const receipts: IReceipt[] = await resp.json();

    return receipts;
}