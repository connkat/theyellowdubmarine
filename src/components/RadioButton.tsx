import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

type Props = {
	value: number;
	lable: number;
};
export default function RadioButton(props: Props) {
	return (
		<FormControl>
			<RadioGroup
				aria-labelledby="radio-buttons-group-label"
				defaultValue="1"
				name="radio-buttons-group"
			>
				<FormControlLabel
					value={props.value}
					control={<Radio />}
					label={props.lable}
				/>
			</RadioGroup>
		</FormControl>
	);
}
