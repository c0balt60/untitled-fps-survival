import React from "@rbxts/react";

import { useRem } from "client/ui/hooks/use-rem";

interface HomeTitleProps {
	/** Position of title */
	position?: UDim2;
}

export function HomeTitle({ position }: HomeTitleProps) {
	const rem = useRem();

	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0)}
			BackgroundTransparency={1}
			Position={UDim2.fromScale(0.5, 0.025)}
			Size={UDim2.fromScale(0.35, 0.25)}
		>
			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				FontFace={Font.fromName("FredokaOne")}
				Position={UDim2.fromScale(0.5, 0.5)}
				Size={UDim2.fromScale(0.8, 0.75)}
				Text="Main Menu"
				TextColor3={new Color3(1, 1, 1)}
				TextScaled={true}
			/>
		</frame>
	);
}
