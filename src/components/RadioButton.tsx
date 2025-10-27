import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

type Props = {
	value: number;
	label: number;
	setSelected: (value: number) => void;
};
export default function RadioButton(props: Props) {
	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		props.setSelected(Number(event.target.value));
	}
	return (
		<FormControl>
			<RadioGroup
				aria-labelledby="radio-buttons-group-label"
				name="radio-buttons-group"
				onChange={handleChange}
			>
				<FormControlLabel
					value={props.value}
					control={<Radio />}
					label={props.label}
				/>
			</RadioGroup>
		</FormControl>
	);
}
