import { useState, useContext, createContext, useEffect } from 'react';
import { fetchItemByName } from '../services/fetchdata/fetchdata';

export const useSelectedItem = () => {
  const [selectedItem, setSelectedItem] = useState('');

  const [detailItem, setDetailItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const results = await fetchItemByName(selectedItem);
      setDetailItem(results);
      setLoading(false);
    };
    fetchData();
  }, [selectedItem]);

  return { setSelectedItem, detailItem };
};
