import React, { useEffect, useState } from 'react';
import { fetchItems } from '../../services/fetchdata/fetchdata';
import Item from '../../components/Item/Item';
import style from './ItemList.css';
import { fetchItemByName } from '../../services/fetchdata/fetchdata';

export default function ItemList() {
  const [itemList, setItemList] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  console.log(selectedItem);

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await fetchItems();
      setItemList(results);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const results = await fetchItemByName(selectedItem);
      console.log(results);
    };
    fetchData();
  }, [selectedItem]);

  return (
    <div className={style.itemList}>
      {itemList?.map((item) => (
        <Item item={item} setSelectedItem={setSelectedItem} />
      ))}
    </div>
  );
}
