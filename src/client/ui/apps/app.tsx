import React from "@rbxts/react";

import Layer from "../components/widgets/layer";
import { Menu } from "./menu";

export function App(): React.ReactNode {
	return (
		<Layer>
			<Menu />
		</Layer>
	);
}
