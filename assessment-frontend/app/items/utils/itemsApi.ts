const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, '') || '';

export async function fetchItems() {
  console.log('BASE_URL:', BASE_URL);
  try {
    const res = await fetch(`${BASE_URL}/api/items`, {
      cache: 'no-store',
    });

    if (!res.ok) throw new Error('Failed to fetch items');
    return await res.json();
  } catch (error) {
    console.error('Error fetching items:', error);
    return [];
  }
}

export async function addItem(name: string, description: string) {
  try {
    const res = await fetch(`${BASE_URL}/api/items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description }),
    });

    if (!res.ok) throw new Error('Failed to add item');
    return await res.json();
  } catch (error) {
    console.error('Error adding item:', error);
    throw error;
  }
}
