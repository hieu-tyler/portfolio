"use client"
import { useState } from "react";

const ItemList = ['categories', 'articles', 'about']

export default function Homepage() {

  return (
    <div className="flex justify-center min-h-screen overflow-y-hidden-hidden">
      <main className="flex flex-col gap-8 w-full">
        <header className="justify-center">
          <div className="">
            <nav className="mx-auto flex justify-between items-center p-4">
              <div className="flex p-4">
                <a href="#">
                  <span className="text-lg">writings.dev</span>
                </a>
              </div>
              <div className="item-list justify-evenly p-2 lg:p-4">
                {ItemList.map(item => (
                  <div className="">
                    <a href="#">{item}</a>
                  </div>
                ))}
              </div>
              {/* <div className="md:hidden"/> */}
            </nav>
          </div>
        </header>
        <div className="hero-image flex flex-col items-center justify-center">
          <div className="">
          <img className="" alt="logo" src="Logo.png"/>
          <h1>Writings for Developers</h1>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
