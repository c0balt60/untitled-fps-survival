import { getBindingValue, useEventListener, useMotion } from "@rbxts/pretty-react-hooks";
import type { Binding } from "@rbxts/react";
import { useRef } from "@rbxts/react";
import type { MotionGoal, SpringOptions } from "@rbxts/ripple";
import { RunService } from "@rbxts/services";

export function useSpring(goal: Binding<number> | number, options?: SpringOptions): Binding<number>;

export function useSpring<T extends MotionGoal>(
	goal: Binding<T> | T,
	options?: SpringOptions,
): Binding<T>;

export function useSpring(goal: Binding<MotionGoal> | MotionGoal, options?: SpringOptions) {
	const [binding, motion] = useMotion(getBindingValue(goal));
	const previousValue = useRef(getBindingValue(goal));

	useEventListener(RunService.Heartbeat, () => {
		const currentValue = getBindingValue(goal);

		if (currentValue !== previousValue.current) {
			previousValue.current = currentValue;
			motion.spring(currentValue, options);
		}
	});

	return binding;
}
