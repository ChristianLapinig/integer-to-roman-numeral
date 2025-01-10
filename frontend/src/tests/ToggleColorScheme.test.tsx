
import { describe, it, expect  } from "vitest";
import { fireEvent, render, RenderResult } from "@testing-library/react";

import App from "../App";

describe("Test ToggleColorScheme", () => {
	let app: RenderResult;

	beforeEach(() => {
		app = render(<App />);
		app.debug();
	});
	
	describe("toggle color scheme", () => {
		it("shows light theme by default", () => {
			expect(document.body.className).toBe("light");
			const { getByTestId } = app;
			const toggleSwitch: any = getByTestId("theme-toggle");
			expect(toggleSwitch.checked).toBe(false);
		});

		it("toggles color scheme after clicking toggle switch", () => {
			const { getByTestId } = app;
			const toggleSwitch = getByTestId("theme-toggle");

			fireEvent.click(toggleSwitch);
			expect(toggleSwitch.checked).toBe(true);
			expect(document.body.className).toBe("dark");
		});
	});
});
