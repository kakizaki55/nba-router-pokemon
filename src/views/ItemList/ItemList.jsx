import React, { useEffect, useState } from 'react';
import { fetchItems } from '../../services/fetchdata/fetchdata';
import Item from '../../components/Item/Item';
import style from './ItemList.css';
import { fetchItemByName } from '../../services/fetchdata/fetchdata';
import { Route, useRouteMatch, Link } from 'react-router-dom';
import ItemDetails from '../../components/ItemDetails/ItemDetails';
import { useSelectedItem } from '../../context/SelectedItemContext';

export default function ItemList() {
  const [pageCount, setPageCount] = useState(1);

  const { url } = useRouteMatch();

  const [fetchUrl, setFetchUrl] = useState('https://pokeapi.co/api/v2/item/');
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await fetchItems(fetchUrl);
      setItemList(results);
    };
    fetchData();
  }, [fetchUrl]);

  const { setSelectedItem, detailItem } = useSelectedItem();

  //handle click to make go back and forth from the 20 item page.
  const handleClick = (direction) => {
    if (direction === 'next') {
      setFetchUrl(itemList.next);
      setPageCount((prevState) => {
        return prevState + 1;
      });
    } else if (direction === 'prev') {
      setFetchUrl(itemList.previous);
      setPageCount((prevState) => {
        return prevState - 1;
      });
    } else {
    }
  };

  const { results: itemListResults } = itemList;

  return (
    <>
      <label className={style.pageCount}>
        page : <span>{pageCount}</span>
      </label>
      <div className={style.itemList}>
        {itemListResults?.map((item) => (
          <Link to={`${url}/${item.name}`} key={item.name}>
            <Item {...item} setSelectedItem={setSelectedItem} />
          </Link>
        ))}
        <div className={style.buttons}>
          {itemList.previous ? (
            <button onClick={() => handleClick('prev')}>prev</button>
          ) : (
            <div className={style.buttonPlace}></div>
          )}
          {itemList.next ? (
            <button onClick={() => handleClick('next')}>next</button>
          ) : (
            <div lassName={style.buttonPlace}></div>
          )}
        </div>
      </div>
      <Route path={`/items/:itemId`}>
        <ItemDetails {...detailItem} />
      </Route>
    </>
  );
}
