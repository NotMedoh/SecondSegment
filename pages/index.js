import { Fragment } from "react";
import Header from "../components/ui/Header";
import Image from "next/image";
import about_thumb from "../public/about_thumb.png";
import classes from "./ui.module.css";
import Link from "next/link";
import Slider from "react-slick";
import Footer from "../components/ui/Footer";
import Head from "next/head";

export default function Home({ fetchedData }) {
	const settings = {
		dots: false,
		arrows: true,
		infinite: true,
		speed: 800,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					dots: true
				}
			}
		]
	};
	return (
		<Fragment>
			<Head>
				<title>Book Store</title>
			</Head>
			<Header />
			<section className={classes.banner__wrap}>
				<div className="container">
					<div className={classes.banner__text}>
						<span>50% discount on early purchase</span>
						<h1>Books at the best price</h1>
						<p>
							Trusted independent sellers offer for sale curated rare books,
							first editions and collectible signed copies of your favorite
							book.
						</p>
					</div>
				</div>
				<div className={classes.banner__wave}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
						<path d="M0,224L60,234.7C120,245,240,267,360,250.7C480,235,600,181,720,176C840,171,960,213,1080,224C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
					</svg>
				</div>
			</section>
			<section className={classes.intro__wrap}>
				<div className="container">
					<div className={classes.wrapper}>
						<div className={classes.image}>
							<Image src={about_thumb} alt="Food Delivery" />
						</div>
						<div className={classes.content}>
							<div className="title_wrap">
								<span>action & adventure collection</span>
								<h2>Best books</h2>
							</div>
							<p>
							Explore the thrilling world of action-packed adventures with our collection of heart-pounding action books. Dive into a realm of suspense, heroism, and adrenaline-pumping excitement. Whether you're a fan of high-stakes espionage, daring heists, epic battles, or fast-paced thrillers, our curated selection of action books offers something for every adrenaline seeker. Get ready to immerse yourself in gripping narratives that will keep you on the edge of your seat. Discover your next pulse-pounding read today!
							</p>
							<Link href="/about" className="primary__btn">
								Know more
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className={classes.home_products_wrap}>
				<div className="container">
					<div className="title_wrap text-center">
						<span>Books on trend</span>
						<h2>New arrivals</h2>
					</div>
					<Slider className={classes.slider} {...settings}>
						{fetchedData.books
							.map((el) => {
								return (
									<div className={classes.home_products} key={el.isbn13}>
										<div className={classes.inner}>
											<Image
												src={el.image}
												alt={el.title}
												width={1000}
												height={1000}
												style={{
													width: "100%",
													height: "auto",
												}}
											/>
											<h3>{el.title}</h3>
										</div>
									</div>
								);
							})
							.slice(0, 5)}
					</Slider>
					<div className="text-center">
						<Link href="/products" className="primary__btn">
							View Products
						</Link>
					</div>
				</div>
			</section>
			<Footer />
		</Fragment>
	);
}

export async function getStaticProps() {
	const response = await fetch(process.env.API_URL);
	const data = await response.json();
	return {
		props: {
			fetchedData: data,
		},
	};
}
