import useRomanNumeral from "../hooks/useRomanNumeral"

export default function RomanNumeral() {
	const { romanNumeral } = useRomanNumeral();

	return (
		<div>
			{romanNumeral ? (
				<p><strong>Roman Numeral: </strong>{romanNumeral}</p>
			): null}
		</div>
	)
}
