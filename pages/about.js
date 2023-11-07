import { Fragment } from "react";
import Header from "../components/ui/Header";
import classes from "./ui.module.css";
import Image from "next/image";
import about_thumb from "../public/about_thumb.png";
import Link from "next/link";
import Footer from "../components/ui/Footer";

export default function About() {
	return (
		<Fragment>
			<Header />
			<section className={classes.intro__wrap}>
				<div className="container">
					<div className="title_wrap text-center">
						<span>Book Store</span>
						<h2>About us</h2>
					</div>
					<div className={classes.wrapper}>						
						<div className={classes.content}>
							<p>
							Welcome to [Your Bookstore Name], where a world of literary wonders awaits you. We are more than just a bookstore; we are a community of book lovers and storytellers. Our passion for the written word drives us to provide you with an exceptional reading experience.

At [Your Bookstore Name], we believe that books have the power to transport you to new worlds, ignite your imagination, and expand your horizons. Whether you're a seasoned bibliophile or just beginning your literary journey, we have something special in store for you.

Our shelves are stocked with a carefully curated selection of genres, from classic literature to contemporary bestsellers, from thrilling mysteries to heartwarming romance, and from mind-bending science fiction to thought-provoking non-fiction. You'll find treasures waiting to be discovered on every visit.
							</p>
                            <p>
							But [Your Bookstore Name] is more than just a place to find your next favorite read. We are a hub for book clubs, author events, and reading discussions, where you can connect with fellow readers and engage in lively conversations about the books you love.

Our knowledgeable and friendly staff is here to assist you in finding the perfect book, whether it's a timeless classic, the latest release, or a hidden gem waiting to be uncovered. We're dedicated to helping you embark on unforgettable literary journeys.

We are proud to be a part of your reading adventures and look forward to being your trusted destination for all things book-related. Thank you for choosing [Your Bookstore Name], where stories come to life, and readers become lifelong friends.

							</p>
							<h2>Discover, Connect, Read.</h2>
						</div>
					</div>
				</div>
			</section>
            <Footer />
		</Fragment>
	);
}
