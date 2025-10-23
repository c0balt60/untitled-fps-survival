import { createContext } from "@rbxts/react";
import type { ScalerApi } from "@rbxts/ui-scaler";

/** @ignore */
// eslint-disable-next-line ts/no-non-null-assertion -- Disable no-null for this scaler api
export const ScalerContext = createContext<ScalerApi>(undefined!);
