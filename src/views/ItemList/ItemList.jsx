import React, { useEffect, useState } from 'react';
import { fetchItems } from '../../services/fetchdata/fetchdata';
import Item from '../../components/Item/Item';
import style from './ItemList.css';

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
    <div className={style.itemList}>
      {itemList?.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
}
