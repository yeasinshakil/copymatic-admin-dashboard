import React, { useContext, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { FiLayers } from "react-icons/fi";
import { BiBookContent } from "react-icons/bi";
import { RiArticleLine } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";
import { VscEditorLayout } from "react-icons/vsc";
import { AiOutlineUser, AiOutlineHeart, AiOutlineFileImage } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.png';
import noteContext from "../../../Context/noteContext";


const Home = () => {
    const menus = [
        { name: "dashboard", link: "/", icon: MdOutlineDashboard },
        { name: "All Tools", link: "/tools", icon: FiLayers },
        { name: "My content", link: "/mycontent", icon: BiBookContent },
        { name: "Article Generator", link: "/articlegenerator", icon: RiArticleLine, margin: true },
        { name: "Chat", link: "/chat", icon: FiMessageSquare },
        { name: "Image Generator", link: "/imagegenerator", icon: AiOutlineFileImage },
        { name: "Rewriter", link: "/rewriter", icon: TfiWrite, margin: true },
        { name: "Smart Editor", link: "/smarteditor", icon: VscEditorLayout },


        { name: "dashboard", link: "/", icon: MdOutlineDashboard },
        { name: "All Tools", link: "/tools", icon: FiLayers },
        { name: "My content", link: "/mycontent", icon: BiBookContent },
        { name: "Article Generator", link: "/articlegenerator", icon: RiArticleLine, margin: true },
        { name: "Chat", link: "/chat", icon: FiMessageSquare },
        { name: "Image Generator", link: "/imagegenerator", icon: AiOutlineFileImage },
        { name: "Rewriter", link: "/rewriter", icon: TfiWrite, margin: true },
        { name: "Smart Editor", link: "/smarteditor", icon: VscEditorLayout },
    ];
    const open = useContext(noteContext);


    return (
        <section className="flex gap-6 z-[100] w-60 fixed top-0 
        ">
            <div className=" ">
                <div
                    className={` bg-slate-100 ${open.open ? "w-60" : "w-20"
                        } duration-500 text-gray-900 px-4 
                        
                        `}
                >
                    <div className="py-3 flex justify-between">
                        {open.open ? <img src={logo} className=' w-[70%]' alt="" /> : ''}

                        <HiMenuAlt3
                            size={26}
                            className="cursor-pointer"
                            onClick={open.toggleMenu}
                        />
                    </div>
                    <div className="mt-4 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-blue-300 h-[100vh] overflow-y-auto hover:scrollbar-thumb-blue-700 scrollbar-thumb-rounded-full scrollbar-track-rounded-full ">
                        {menus?.map((menu, i) => (
                            <NavLink
                                key={i}
                                to={menu?.link}

                                className={` ${menu?.margin && "mt-5"
                                    } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md `}
                            >
                                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                                <h2
                                    style={{
                                        transitionDelay: `${i + 3}00ms`,
                                    }}
                                    className={`whitespace-pre duration-500 ${!open.open && "opacity-0 translate-x-28 overflow-hidden"
                                        }`}
                                >
                                    {menu?.name}
                                </h2>
                                <h2
                                    className={`${open.open && "hidden"
                                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit z-30`}
                                >
                                    {menu?.name}
                                </h2>
                            </NavLink>
                        ))}

                    </div>

                    {/* drop down */}
                    {/* <div className=" mt-10 inline-flex bg-white border rounded-md">
                    <a
                        href="#"
                        className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md"
                    >
                        Projects
                    </a>

                    <div className="relative">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        <div className="absolute left-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
                            <div className="p-2">
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                                >
                                    ReactJS Dropdown 1
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                                >
                                    ReactJS Dropdown 2
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                                >
                                    ReactJS Dropdown 3
                                </a>
                            </div>
                        </div>
                    </div>
                </div> */}




                </div>
            </div>
        </section>
    );
};

export default Home;