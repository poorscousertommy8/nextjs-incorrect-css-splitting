import Link from "next/link";

export default function Home() {
	return (
		<ul>
			<li>
				<Link href="/" prefetch={false}>
					Home
				</Link>
			</li>
			<li>
				<Link href="/page1" prefetch={false}>
					Page 1
				</Link>
			</li>
			<li>
				<Link href="/page2" prefetch={false}>
					Page 2
				</Link>
			</li>
		</ul>
	);
}
