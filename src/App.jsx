import React, { useState } from "react";

function App() {

  // 1. Data
  const initialData = [
    { id: 1, name: "Item 1", price: 100 },
    { id: 2, name: "Item 2", price: 200 },
    { id: 3, name: "Item 3", price: 300 }
  ];

  // 2. State
  const [items, setItems] = useState(initialData);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);

  // 3. Search / Filter
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // 4. Add
  const addItem = (item) => {
    setSelected([...selected, item]);
  };

  // 5. Remove
  const removeItem = (id) => {
    setSelected(
      selected.filter(item => item.id !== id)
    );
  };

  return (
    <div>

      <h1>My Application</h1>

      {/* 6. Search */}
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 7. Display List */}
      {filteredItems.map(item => (
        <div key={item.id}>

          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>

          <button onClick={() => addItem(item)}>
            Add
          </button>

        </div>
      ))}

      {/* 8. Selected Items */}
      <h2>Selected Items: {selected.length}</h2>

      {selected.map(item => (
        <div key={item.id}>
          <span>{item.name}</span>

          <button onClick={() => removeItem(item.id)}>
            Remove
          </button>
        </div>
      ))}

    </div>
  );
}

export default App;