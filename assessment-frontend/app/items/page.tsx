import ItemsClient from "../components/Items";
import { fetchItems } from "./utils/itemsApi";

export default async function ItemsPage() {
  // Fetch items on the server
  const items = await fetchItems();
  
  return <ItemsClient initialItems={items} />;
}