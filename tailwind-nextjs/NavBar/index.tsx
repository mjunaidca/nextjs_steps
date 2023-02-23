'use client'

import Link from "next/link";
import { NAV_ITEMS } from "./NAVITEMS";

const NavBAR=()=> {
  return (
    <div className="flex justify-center bg-blue-400 mx-4 gap-4 py-2">
        {NAV_ITEMS.map((nav)=>(
            <div key={nav.label} >
        <Link 
           
            href={nav.href ?? '#'}
            >
            {nav.label}
          </Link>
          </div>
      ))}
      </div>
  )
}

export default NavBAR;