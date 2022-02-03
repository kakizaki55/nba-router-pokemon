import React, { useEffect, useState } from 'react';
import { fetchItems } from '../../services/fetchdata/fetchdata';
import Item from '../../components/Item/Item';

export default function ItemList() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await fetchItems();
      setItemList(results);
    };
    fetchData();
  }, []);

  return (
    <div>
      {itemList?.map((item) => (
        <Item value={item.name} item={item}></Item>
      ))}
    </div>
  );
}
