"use client";

import React, {useState, useEffect} from "react";
import { MyCard } from "../../../components/my_card";
import { fetchItem } from "@/utils/data";

//const data = [{ title: "Titre1", description: "description1" }];
const ItemPage = ({id}) => {
  const [item, setItem] = useState({});
  useEffect(()=>{
    const fetchItemData = async ()=> {
      const itemData = await fetchItem(id);
      setItem(itemData);
      console.log(itemData)
    };
    fetchItemData();
  }, [id]);

  return (
    <div className="relative flex-1 min-h-full bg-cover bg-[url('/catalogue.jpg')] flex items-center justify-center w-full">
      <div className="absolute inset-0 bg-grey/10 backdrop-blur-sm"></div>{" "}
      <div className="relative w-full max-w-screen-lg flex flex-wrap justify-center items-center gap-16">
        
          <div className="w-full sm:w-1/2 lg:w-1/3">
            {/* <MyCard item={item} category={item.category} description={item.description} image={item.image} /> */}
          </div>
        
      </div>
    </div>
  );
};

export default ItemPage;