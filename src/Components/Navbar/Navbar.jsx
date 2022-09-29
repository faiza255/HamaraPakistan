

import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {ImCross } from "react-icons/im";
import './Navbar.css'
const Navbar = () => {
    const navRef = useRef();

    const [mobile,setmobile] = useState(true)
	// const showNavbar = () => {
	// 	navRef.current.classList.toggle("responsive_nav");
	// };
  return (
    <>
{/* <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"></nav> */}
<nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <a href="" class="flex items-center">
            <img src="/src/assets/logo.png" class="mr-3 w-50 h-28 sm:h-50" alt="Humara Pakistan"/>
            {/* <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
        </a>
        <div class="flex items-center">
        <img src="/src/assets/ad.png" class="mr-3 w-50 h-16 sm:h-50" alt="Humara Pakistan"/>
        </div>
    </div>
</nav>
<nav class="bg-lightgreen dark:bg-gray-700 navigation">
    <div class="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
        <div class="flex items-center">
            <ul class={mobile ? "flex flex-row mt-0 mr-6 space-x-8 text-sm font-cormorant" : "nav-links"} onClick={() => setmobile(false)}>
                <li className={mobile ? "nv-lk nv-lks" : ""}>
                <a href="#" class={mobile ? "text-white text-lg font-semibold dark:text-white hover:text-darkgreen" : "text-white text-lg p-5  dark:text-white hover:text-darkgreen nv-size"}>Home</a>
                </li>
                <li className={mobile ? "nv-lks" : ""}>
                    <a href="#" class={mobile ? "text-white text-lg font-semibold dark:text-white hover:text-darkgreen" : "text-white text-lg dark:text-white hover:text-darkgreen nv-size"}>Company</a>
                </li>
                <li className={mobile ? "nv-lks" : ""}>
                <a href="#" class={mobile ? "text-white text-lg font-semibold dark:text-white hover:text-darkgreen" : "text-white text-lg  dark:text-white hover:text-darkgreen nv-size"}>Team</a>
                </li>
                <li className={mobile ? "nv-lks" : ""}>
                    <a href="#" class={mobile ? "text-white text-lg font-semibold dark:text-white hover:text-darkgreen" : "text-white text-lg  dark:text-white hover:text-darkgreen nv-size"}>Features</a>
                </li>
    <button className="nav-btn" onClick={()=> setmobile(!mobile)}>
				{mobile ? <FaBars />  : <ImCross onClick={()=> setmobile(true)}/>}
				</button>
            </ul>
        </div>
    </div>
</nav>

<div className="container w-50 m-auto">
    <div className="flex justify-between">
    <div className="div-mainNews">
        <h1>Main News</h1>
        <div className="box">
<div className="main-news">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex temporibus perferendis consequatur eius officia quasi vel ab voluptatem delectus odio!</p>
</div>
<div className="small-news flex justify-between">
    <div className="column1">
        <div className="news-box">News Box</div>
        <div className="news-box">News Box</div>
        <div className="news-box">News Box</div>
        <div className="news-box">News Box</div>
        <div className="news-box">News Box</div>
    </div>
    <div className="column2">
    <div className="news-box">News Box</div>
    <div className="news-box">News Box</div>
    <div className="news-box">News Box</div>
    <div className="news-box">News Box</div>
    <div className="news-box">News Box</div>
    </div>
</div>
        </div>
    </div>
    <div className="side-news">
        <h1>Side News</h1>
        <div className="side-box">
            side box
        </div>
    </div>
    </div>
</div>

    </>
  )
}

export default Navbar