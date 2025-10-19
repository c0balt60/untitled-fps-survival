import { useScale } from "client/ui/hooks/use-scale";

export function usePx() {
	return useScale().usePx();
}
