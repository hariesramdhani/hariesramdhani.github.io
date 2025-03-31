'use client';

import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useTab } from "../context/TabContext";

interface CardData {
  url: string | null;
  image_filename: string;
  title: string;
  description: string;
}

export default function GenericCard() {
  const { activeTab } = useTab();
  const [data, setData] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log('Fetching data for:', activeTab);
        
        const response = await fetch(`/data/${activeTab}.json`);
        
        if (!response.ok) {
          throw new Error(`Failed to load ${activeTab} data`);
        }
        
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(`Failed to load ${activeTab} data`);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      {data.map((item) => (
        <Card
          key={item.image_filename}
          url={item.url ?? '#'}
          image_filename={item.image_filename}
          title={item.title}
          description={item.description}
        />
      ))}
    </>
  );
}