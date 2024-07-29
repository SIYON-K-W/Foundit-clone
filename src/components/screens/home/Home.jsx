import React, { useEffect, useState } from "react";
import Header from "../../includes/navbar/Header";
import SearchCategory from "./_components/SearchCategory";
import Companies from "./_components/Companies";
import OurResourse from "./_components/OurResourse";
import PopularCategories from "./_components/PopularCategories";
import Advertisement from "./_components/Advertisement";
import MainFooter from "../../includes/footer/MainFooter";
import HeaderSecond from "./_components/HeaderSecond";
import Bottomenu from "./_components/Bottomenu";

function Home() {
	const [isfixed, setIsfixed] = useState(false);
	const [item, setItem] = useState(false);
	const handleit = () => {
		document.querySelector("body").style.overflow = "hidden";
		setItem(true);
	};
	const removehandleit = () => {
		setItem(false);
		document.querySelector("body").style.overflow = "";
	};
	useEffect(() => {
		const handle = () => {
			const scrolly = window.scrollY;
			if (scrolly >= 200) {
				setIsfixed(true);
			} else {
				setIsfixed(false);
			}
		};
		window.addEventListener("scroll", handle);
		return () => {
			window.removeEventListener("scroll", handle);
		};
	}, []);
	return (
		<>
			<HeaderSecond
				isfixed={isfixed}
				item={item}
				settheitem={{ removehandleit, handleit }}
			/>
			<Bottomenu />
			<Header />
			<div className="4xl:pt-10">
				<SearchCategory setitem={handleit} />
			</div>
			<div className="rounded-t-2xl bg-white -mt-3 pt-8 pb-24 max-md:pb-20">
				<div className="wrapper">
					<div className="flex gap-8 flex-col">
						<OurResourse />
						<Companies />
						<PopularCategories />
						<Advertisement />
					</div>
				</div>
			</div>
			<MainFooter />
		</>
	);
}

export default Home;
