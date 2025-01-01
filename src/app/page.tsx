import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
	return (
		<div className="">
			<Input />
			<Button variant="primary" size="sm">
				ClickClickClick
			</Button>
			<Button variant="secondary" size="sm">
				secondary
			</Button>
			<Button variant="destructive" size="sm">
				destructive
			</Button>
			<Button variant="ghost" size="sm">
				ghost
			</Button>
			<Button variant="muted" size="sm">
				Muted
			</Button>
			<Button variant="teritary" size="sm">
				Teritary
			</Button>
		</div>
	);
}
