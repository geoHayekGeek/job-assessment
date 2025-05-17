const getBaseUrl = () => {
  if (typeof window === "undefined") {
    return process.env.NEXT_PUBLIC_API_URL;
  } else {
    return "";
  }
};

export async function fetchItems() {
  try {
    const base = getBaseUrl();
    const res = await fetch(`${base}/api/items`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch items");
    return await res.json();
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
}

export async function addItem(name: string, description: string) {
  try {
    const res = await fetch(`/api/items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description }),
    });

    if (!res.ok) throw new Error("Failed to add item");
    return await res.json();
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
}
