import React, { useEffect, useState } from 'react';
import { fetchItems } from '../../services/fetchdata/fetchdata';
import Item from '../../components/Item/Item';
import style from './ItemList.css';
import { fetchItemByName } from '../../services/fetchdata/fetchdata';
import { Route, useRouteMatch, Link } from 'react-router-dom';
import ItemDetails from '../../components/ItemDetails/ItemDetails';

export default function ItemList() {
  const [fetchUrl, setFetchUrl] = useState('https://pokeapi.co/api/v2/item/');
  const [itemList, setItemList] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  const [detailItem, setDetailItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const { url } = useRouteMatch();

  useEffect(() => {
    const fetchData = async () => {
      const results = await fetchItems(fetchUrl);
      setItemList(results);
    };
    fetchData();
  }, [fetchUrl]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await fetchItemByName(selectedItem);
        setDetailItem(results);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedItem]);

  //handle click to make go back and forth from the 20 item page.
  const handleClick = (direction) => {
    if (direction === 'next') {
      setFetchUrl(itemList.next);
    } else {
      setFetchUrl(itemList.previous);
    }
  };

  const { results: itemListResults } = itemList;

  console.log(detailItem);

  return (
    <>
      <div className={style.itemList}>
        {itemListResults?.map((item) => (
          <Link to={`${url}/${item.name}`} key={item.name}>
            <Item {...item} setSelectedItem={setSelectedItem} />
          </Link>
        ))}
        <button onClick={() => handleClick()}>prev</button>
        <button onClick={() => handleClick('next')}>next</button>
      </div>
      <Route path={`/items/:itemId`}>
        <ItemDetails {...detailItem} />
      </Route>
    </>
  );
}
