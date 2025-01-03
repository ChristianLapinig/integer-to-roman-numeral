import { AlertDialog, DialogContainer } from "@adobe/react-spectrum";

import useError from "../hooks/useError";

export default function ErrorDialog() {
	const { error, showErr, setError, setShowErr } = useError();

	const handleDismiss = () => {
		setError("");
		setShowErr(false);
	};

	return (
		<DialogContainer onDismiss={handleDismiss}>
			{showErr && 
				<AlertDialog
					title="Error"
					variant="error"
					primaryActionLabel="Ok"
					onPrimaryAction={handleDismiss}
				>
					{error}
				</AlertDialog>
			}
		</DialogContainer>	
	);
}
