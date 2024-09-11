"use client";

import Link from "next/link";
import React from "react";
import { MyCard } from "../../../components/my_card";
import { useSearchParams } from "next/navigation";
import { anyFetch } from "@/utils/data";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const hardCodedData = [
  { title: "Titre1", description: "description1" },
  { title: "Titre2", description: "description2" },
  { title: "Titre3", description: "description3" },
  { title: "Titre4", description: "description4" },
  { title: "Titre5", description: "description5" },
  { title: "Titre6", description: "description6" },
];

export default function CataloguePage() {

  // ========== Maxime TEST ==============
  const params = useSearchParams();
  const id = params.get("id")
  console.log(id)

  // const [fetchedData, setFetchedData] = useState()

  // useEffect(() => {

  //   let ourData;
  //   fetch(`http://localhost:9090/furnitures/item?id=${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data)
  //       ourData = data
  //       setFetchedData(data)
  //     }).then(() => {
  //       console.log(id)
  //       console.log(ourData);
  //     })
  // })
  // ============== END TEST ===================

  const [notreData, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  // const [superId, setSuperId] = useState()

  useEffect(() => {
    // setSuperId(id)

    fetch(`http://localhost:9090/furnitures/item?id=1`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
        console.log(data)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!notreData) return <p>No profile data</p>

  return (
    <div className="relative -z-10 flex-1 min-h-full bg-cover bg-[url('/catalogue.jpg')] flex items-center justify-center w-full">
      <div className="absolute top-0 bottom-0 backdrop-blur-sm bg-white/10 min-h-full w-full">
        <div className="flex justify-center items-center w-full">
          <div className="grid grid-cols-3 gap-6 p-6">
            {/* <span className="z-50 text-black">Data:{notreData.dimensions}</span> */}

            {hardCodedData.map((d) => (
              <div className="flex justify-center items-center" key={d.title}>
                <Link
                  href="/furniture/item"
                  className="w-4/5 hover:cursor-pointer"
                >
                </Link>
                <MyCard title={d.title} description={d.description} />
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};