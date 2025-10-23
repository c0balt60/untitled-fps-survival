import { useContext } from "@rbxts/react";
import type UIScaler from "@rbxts/ui-scaler";

import { ScalerContext } from "client/ui/context/scaler-context";

export function useScale(): UIScaler.ScalerApi {
	// TODO: Look into the type errors here
	// eslint-disable-next-line ts/no-unsafe-assignment -- Unnecessary errors
	const context = useContext(ScalerContext) as UIScaler.ScalerApi;

	// eslint-disable-next-line ts/strict-boolean-expressions -- temporarily disable strict boolean rule
	assert(context, "ScalerContext not found. Did you call it outside of ScalerContext?");
	return context;
}
