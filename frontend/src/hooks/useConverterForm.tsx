import { useState, useEffect, FormEvent } from "react";

import useRomanNumeral from "./useRomanNumeral"; 

const API_URI = import.meta.env.VITE_API_URI;

export default function useConverterForm() {
	const { setRomanNumeral } = useRomanNumeral();
	const [value, setValue] = useState<string | null>("");
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		// set state of value on mount if the url 
		// includes /romannumeral?query={value}
		if (window.location.search.length > 0) {
			const params = new URLSearchParams(window.location.search);
			const queryValue = params.get("query");
			setValue(queryValue);
		}
	}, []);

	const convertToRomanNumeral = async (value: string | null) => {
		try {
			const res = await fetch(`${API_URI}/romannumeral?query=${value}`);
			const json = await res.json();
			if (!res.ok) {
				console.error(`[ERROR] ${json.err}`);
				setError(json.err); 
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
		error,
	};
}

