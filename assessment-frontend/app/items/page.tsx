import ItemsClient from "../components/Items";
import { fetchItems } from "./utils/itemsApi";

export default async function ItemsPage() {
  let items = [];
  let hasError = false;

  try {
    items = await fetchItems();
  } catch (e) {
    hasError = true;
  }

  return <ItemsClient initialItems={items} hasError={hasError} />;
}