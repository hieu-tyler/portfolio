"use client"
import { useState } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";

const ItemList = ['categories', 'articles', 'about']
const CodeTopic = [
  'JavaScript',
  'DevOps',
  'Cloud',
  'Terraform',
  'Architecture',
  'Scalability',
  'Explainers',
]
const cardTopic = [
  { name: "Topic", description: "Description", image: "" },
  { name: "Topic", description: "Description", image: "" },
  { name: "Topic", description: "Description", image: "" },
  { name: "Topic", description: "Description", image: "" },
  { name: "Topic", description: "Description", image: "" },
  { name: "Topic", description: "Description", image: "" },
  { name: "Topic", description: "Description", image: "" },
  { name: "Topic", description: "Description", image: "" },
]

export default function Homepage() {

  return (
    <div className="flex justify-center min-h-screen overflow-y-hidden-hidden">
      <main className="flex flex-col gap-2 w-full bg-gray-800">
        <header className="justify-center">
          <div className="mx-auto flex justify-between items-center p-4 pt-8">
            <div className="flex px-16">
              <a href="#">
                <span className="lg:text-lg text-base">writings.dev</span>
              </a>
            </div>
            <div className="item-list flex justify-evenly px-16">
              {ItemList.map(item => (
                <div className="p-2" key={item}>
                  <a href="#">{item}</a>
                </div>
              ))}
            </div>
          </div>
        </header>
        <div className="hero-image flex flex-row items-center justify-center">
          <div className="p-2 size-3/12 flex items-center justify-center">
            <img className="" alt="logo" src="Logo.png" />
          </div>

        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="p-2">
            <h1 className="text-5xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl text-red-400 italic">Writings for Developers</h1>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center">
          <span className="text-lg">Currated collection of articles for busy developers</span>
        </div>

        <hr className="h-px mt-8 border-gray-700"></hr>

        <div className="flex flex-row items-center justify-between px-16">
          <div className="icon-filter px-2 flex items-center justify-center">
            <button className="p-2">
              <BsFillGrid3X3GapFill />
            </button>
            <button className="pr-2">
              <FaList />
            </button>
          </div>
          <div className="pr-4 flex mask-scroll justify-between overflow-x-auto scrollbar-hidden">
            {CodeTopic.map(item => (
              <button className="px-2 italic">{item}</button>
            ))}
          </div>
          <div>
            <button></button>
          </div>
        </div>

        <div className="card-grid grid grid-flow-row lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-[5rem] py-4">
          {cardTopic.map(card => (
            <>
              <div className="p-4 flex flex-col justify-center bg-white border-l-blue-50 rounded-md text-black">
                <img className="" src="Logo.png" />
                <div>
                  <span className="font-semibold">{card.name}</span>
                </div>
                <div>
                  <span>{card.description}</span>
                </div>
              </div>
            </>
          ))}
        </div>

        <div className="page-number flex flex-row justify-center gap-6 italic">
          <button className="italic">Previous</button>
          <button className="italic">1</button>
          <button className="italic">2</button>
          <button className="italic">3</button>
          <button className="italic">4</button>
          <button className="italic">5</button>
          <button className="italic">Next</button>
        </div>

      </main>

      <hr className="h-px mt-8 border-gray-700"></hr>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* <div className="mx-auto flex justify-between items-center p-4 pt-8">
          <div className="flex px-16">
            <a href="#">
              <span className="lg:text-lg text-base">writings.dev</span>
            </a>
          </div>
          <div className="item-list flex justify-evenly px-16">
            {ItemList.map(item => (
              <div className="p-2" key={item}>
                <a href="#">{item}</a>
              </div>
            ))}
          </div>
        </div> */}
      </footer>
    </div>
  );
}
