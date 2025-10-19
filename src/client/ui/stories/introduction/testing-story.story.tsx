import type { PropsWithChildren } from "@rbxts/react";
import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";

import { App } from "client/ui/apps";

// its a good practice to have
// `PropsWithChildren`, but it
// isn't required. I made up this
// "good practice" because roblox-ts
//
interface ReadmeProps extends PropsWithChildren {
	/** The text to display */
	text?: string;
}
/** We create a react component */
function Component({ text }: ReadmeProps) {
	return (
		<textlabel
			AnchorPoint={new Vector2(0.5, 0.5)}
			Position={UDim2.fromScale(0.5, 0.5)}
			Size={UDim2.fromScale(0.5, 0.5)}
			Text={text}
		/>
	);
}

export = CreateReactStory({ react: React, reactRoblox: ReactRoblox }, () => {
	return (
		// <ScaleProvider>
		//     <Component text="lorem ipsum dorem"/>
		// </ScaleProvider>
		<App />
	);
});
