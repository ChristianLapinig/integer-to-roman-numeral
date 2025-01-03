import { Form, TextField, Button } from "@adobe/react-spectrum";
import  useConverterForm from "../hooks/useConverterForm";

export default function ConverterForm() {
  const { 
	value,
	handleSubmit,
	handleChange,
	isSubmitting,
   } = useConverterForm();

  return (
	<Form maxWidth="size-3000" onSubmit={handleSubmit}>
		<TextField 
			isRequired
			margin="size-200" 
			width="size-3000" 
			value={value}
			onChange={handleChange}
			type="text" 
			label="Enter a Number" 
		/>
		<Button 
			margin="size-200" 
			type="submit" 
			variant="primary"
		>
			{isSubmitting ? "Converting" : "Convert to roman numeral"}
		</Button> 
	</Form>
  )
}
