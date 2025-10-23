import type UIScaler from "@rbxts/ui-scaler";

import { useScale } from "client/ui/hooks/use-scale";

export function usePx(): UIScaler.СalculatorApi {
	// TODO: Figure out type issues with usePx
	// eslint-disable-next-line ts/no-unsafe-call, ts/no-unsafe-member-access -- Temp disable
	return useScale().usePx();
}
