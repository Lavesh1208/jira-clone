import Image from "next/image";
import Link from "next/link";
import { DottedSeparator } from "./doted-separator";
import Navigation from "./navigation";
import Projects from "./projects";
import WorkspaceSwitcher from "./workspace-switcher";

const Sidebar = () => {
	return (
		<aside className="h-full bg-neutral-100 p-4 w-full">
			<Link href="/">
				<Image src="/logo.svg" height={48} width={164} alt="logo" />
			</Link>
			<DottedSeparator className="my-4" />
			<WorkspaceSwitcher />
			<DottedSeparator className="my-4" />
			<Navigation />
			<DottedSeparator className="my-4" />
			<Projects />
		</aside>
	);
};

export default Sidebar;
