import dynamic from "next/dynamic";

const Page1 = dynamic(() => import("@/components/Page1"));
const Page2 = dynamic(() => import("@/components/Page2"));

const Page = ({ params: { pagename: pagenameArr } }) => {
	const pagename = pagenameArr?.[0];

	if (pagename === "page1") return <Page1 />;
	if (pagename === "page2") return <Page2 />;
};

export default Page;
