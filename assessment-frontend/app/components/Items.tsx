'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AddItemModal from './AddItemModal';
import ItemsTable from './ItemsTable';
import { addItem } from "../items/utils/itemsApi"

interface Item {
  id: number;
  name: string;
  description: string;
}

interface ItemsClientProps {
  initialItems: Item[];
}

export default function ItemsClient({ initialItems }: ItemsClientProps) {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleAddItem = async (name: string, description: string) => {
    try {
      const newItem = await addItem(name, description);
      setItems([...items, newItem]);
      router.refresh(); // Refresh the page to update the server component data
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-6 flex justify-between items-center !text-white">
        <h1 className="text-2xl font-bold text-gray-800">Items</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="group px-4 py-2 bg-indigo-600 !text-white rounded-md hover:bg-transparent hover:!text-black border-solid border-1 border-indigo-600 transition flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 fill-white group-hover:fill-black" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add Item
        </button>
      </div>

      {items.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow text-center">
          <p className="text-gray-500">No items found. Add your first item!</p>
        </div>
      ) : (
        <ItemsTable items={items} />
      )}

      <AddItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddItem}
      />
    </div>
  );
}