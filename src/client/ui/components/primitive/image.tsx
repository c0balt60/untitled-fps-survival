import type { BindingOrValue } from "@rbxts/pretty-react-hooks";
import type { PropsWithChildren } from "@rbxts/react";
import React, { forwardRef } from "@rbxts/react";

import type { AssetId } from "types/utils/roblox";

export interface ImageProps extends PropsWithChildren {
	/** Optional corner radius */
	CornerRadius?: BindingOrValue<UDim>;
	/** The image to display. */
	Image: BindingOrValue<AssetId>;
}

/**
 * A component for displaying an image.
 *
 * @example
 *
 * ```tsx
 * <ImageLabel
 * 	Image="rbxassetid://1234567890"
 * 	native={{
 * 		Size={new UDim2(0, 100, 0, 100)}
 * 	}}
 * />;
 * ```
 *
 * @component
 *
 * @see https://developer.roblox.com/en-us/api-reference/class/ImageLabel
 */
const Image = forwardRef(({ CornerRadius, Image, children }: ImageProps, ref: React.Ref<ImageLabel>) => {
	return (
		<imagelabel
			ref={ref}
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			Image={Image}
			Position={new UDim2(0.5, 0, 0.5, 0)}
			Size={new UDim2(1, 0, 1, 0)}
		>
			{CornerRadius ? <uicorner CornerRadius={CornerRadius} /> : undefined}
			{children}
		</imagelabel>
	);
});

export default Image;
