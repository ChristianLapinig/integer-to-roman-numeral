import { describe, it, expect  } from "vitest";
import { render, RenderResult, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

import App from "../App";

describe("Test App", () => {
	let app: RenderResult;

	beforeEach(() => {
		app = render(<App />);
		app.debug();
	});

	it("renders correctly", () => {
		const element = screen.getByText("Integer to Roman Numeral Converter");
		expect(element).toBeInTheDocument();
	});
});
