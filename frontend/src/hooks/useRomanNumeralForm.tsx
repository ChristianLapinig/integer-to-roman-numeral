import { useState, useEffect, FormEvent } from "react";

import useRomanNumeral from "./useRomanNumeral"; 
import useError from "./useError";

const API_URI = import.meta.env.VITE_API_URI;

export default function useRomanNumeralForm() {
	const { setRomanNumeral } = useRomanNumeral();
	const { setError, setShowErr } = useError();
	const [value, setValue] = useState<string | undefined>("");
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	useEffect(() => {
		// set state of value on mount if the url 
		// includes /romannumeral?query={value}
		if (window.location.search.length > 0) {
			const params = new URLSearchParams(window.location.search);
			const queryValue = params.get("query") || undefined;
			setValue(queryValue);
		}
	}, []);

	const convertToRomanNumeral = async (value: string | undefined) => {
		try {
			const res = await fetch(`${API_URI}/romannumeral?query=${value}`, {
				headers: {
					"accept": "application/json",
				},
			});
			const json = await res.json();
			if (!res.ok) {
				console.error(`[ERROR] ${json.err}`);
				setError(json.err); 
				setShowErr(true);
			} else {
				console.log(`[INFO] Successful conversion - input: ${json.input}, roman numeral: ${json.output}`);
				setRomanNumeral(json.output);

				// create query url to be pushed to history 
				const queryParam: string = new URLSearchParams("query").toString();
				const queryUrl = `/romannumeral?${queryParam}${value}`;
				window.history.pushState(null, "", queryUrl);
			}
		} catch (err) {
			console.error(`[ERROR] ${err}`);
			setError("An error occurred. Sorry for the inconvenience.");
			setShowErr(true);
		}
	}

	const handleChange = (value: string): void => {
		setValue(value);
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault();
		setIsSubmitting(true);
		console.log(`[INFO] Value ${value} submitted for conversion`);
		try {
			await convertToRomanNumeral(value);
		} catch (err) {
			console.error(`[ERROR] ${err}`);
			setError("An error occurred. Sorry for the inconvenience.");
		} finally {
			setIsSubmitting(false);
		} 
	};

	return { 
		value,
		handleChange, 
		handleSubmit,
		isSubmitting,
	};
}

