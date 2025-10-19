import type { BindingOrValue } from "@rbxts/pretty-react-hooks";
import { getBindingValue } from "@rbxts/pretty-react-hooks";
import React from "@rbxts/react";

import { usePx } from "client/ui/hooks/use-px";

interface CornerProps {
	Radius: BindingOrValue<number>;
}

/**
 * A React component that renders a UI corner with a customizable radius.
 *
 * @remarks
 * This component is used to apply a corner radius to UI elements.
 * @example
 *
 * ```tsx
 * <Corner Radius={10} />;
 * ```
 *
 * @param props - The properties for the Corner component.
 * @param props.Radius - The radius of the corner in pixels.
 * @returns - A React element representing a UI corner with the specified
 *   radius.
 */
export function Corner({ Radius }: CornerProps) {
	const px = usePx();
	return <uicorner CornerRadius={px.udim(getBindingValue(Radius))} />;
}
