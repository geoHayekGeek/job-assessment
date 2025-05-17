export async function fetchItems() {
  try {
    const res = await fetch("http://localhost:8080/api/items", { 
      cache: 'no-store',
      // In a real application, you'd want to use different base URLs for server vs. client
      // and potentially use Next.js route handlers instead of direct API calls
    });
    
    if (!res.ok) throw new Error('Failed to fetch items');
    return await res.json();
  } catch (error) {
    console.error('Error fetching items:', error);
    return [];
  }
}

export async function addItem(name: string, description: string) {
  const res = await fetch("http://localhost:8080/api/items", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, description }),
  });

  if (!res.ok) throw new Error('Failed to add item');
  return await res.json();
}
