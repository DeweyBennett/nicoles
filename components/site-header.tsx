"use client"

import { useState } from "react"
import { AlignRight, ChevronDown, XCircle } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { Checkbox } from "@/components/ui/checkbox"

const data = [
    { id: 1, name: 'Home', url: '/' },
    { id: 2, name: 'About', url: '/about' },
    { id: 3, name: 'Categories', subMenu: true},
    { id: 4, name: 'Contact', url: '/contact' },
]

const subMenuData = [
    { id: 1, name: 'Bags', value: 'bags', doc_count: 10 },
    { id: 2, name: 'Belts', value: 'belts', doc_count: 10 },
    { id: 3, name: 'Gloves', value: 'gloves', doc_count: 10 },
    { id: 4, name: 'Scarves', value: 'scarves', doc_count: 10 },
    { id: 5, name: 'Wallets', value: 'wallets', doc_count: 10 },
]

export function SiteHeader() {
  const [ mobileMenu, setMobileMenu ] = useState(false)
  const [ showCatMenu, setShowCatMenu ] = useState(false)
  const [ show, setShow ] = useState('translate-y-0')
  const searchParams = useSearchParams()
  const searchValues = Array.from(searchParams.entries())
  const router = useRouter()

  return (
    <header className={`w-full h-[50px] md:h-[80px] flex items-center justify-between z-20 sticky top-[64px] shadow bg-white transition-transform duration-300 ${show}`}>
        <div className={`w-full max-w-[1280px] h-[60px] flex justify-center items-center px-5 md:px-10 mx-auto `}>
            <ul className="hidden md:flex items-center justify-center gap-8 font-medium text-black">
                {data.map((item) => (
                    <div key={item.id}>
                        {!!item.subMenu ? 
                            <li onClick={() => setShowCatMenu(!showCatMenu)} className="cursor-pointer flex items-center gap-2 relative">
                                {item.name}
                                <ChevronDown className="h-5 w-5"/>

                                {showCatMenu &&
                                    <ul className="absolute top-6 left-0 min-w-[250px] px-1 bg-white text-black shadow-lg">
                                        {subMenuData.map((sub) => (
                                            <li key={sub.id} className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                                                 <div
                                                    key={sub.id}
                                                    className="flex items-center space-x-2"
                                                >
                                                    <Checkbox 
                                                    id={sub.value}
                                                    checked={searchValues.some(([ key, value ]) => key === 'category' && value === sub.value)}
                                                    onClick={(event) => {
                                                        const params = new URLSearchParams(searchParams)
                                                        const checked = event.currentTarget.dataset.state === "checked"

                                                        checked ? params.delete('category') : params.set('category', sub.value)

                                                        router.push(`http://localhost:3000/?${params.toString()}`)
                                                    }}
                                                    />
                                                    <label htmlFor={sub.value} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                    {sub.name}
                                                    </label>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                }
                            </li>
                        : 
                            <li className="cursor-pointer">
                                <a href={item.url}>
                                    {item.name}
                                </a>
                            </li>
                        }
                    </div>
                ))}
            </ul>
            {mobileMenu &&
                <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
                    {data.map((item) => (
                        <div key={item.id}>
                            {!!item.subMenu ? 
                                <li onClick={() => setShowCatMenu(!showCatMenu)} className="cursor-pointer px-5 py-4 border-b flex flex-col relative">
                                    <div className="flex justify-between items-center">
                                        {item.name}
                                        <ChevronDown className="h-5 w-5"/>
                                    </div>

                                    {showCatMenu &&
                                        <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                                            {subMenuData.map((sub) => (
                                                <li key={sub.id} className="py-4 px-8 border-t flex justify-between">
                                                    <a href="/" onClick={() => {
                                                        setShowCatMenu(false)
                                                        setMobileMenu(false)
                                                    }}>
                                                        {sub.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    }
                                </li>
                            : 
                                <li className="py-4 px-5 border-b cursor-pointer">
                                    <a href={item.url} onClick={() => setMobileMenu(false)}>
                                        {item.name}
                                    </a>
                                </li>
                            }
                        </div>
                    ))}
                </ul>
            }
        </div>
        <div className="md:hidden w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            {mobileMenu ?
                <XCircle className="h-8 w-8" onClick={() => setMobileMenu(false)}/>
            :
                <AlignRight className="h-8 w-8" onClick={() => setMobileMenu(true)}/>
            }
        </div>
    </header>
  )
}
