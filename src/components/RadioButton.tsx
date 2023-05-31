import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

type Props = {
	value: number;
	lable: number;
	setSelected: (e:any) => void;
};
export default function RadioButton(props: Props) {
	function handleChange(event: any) {
		props.setSelected(event.target.value);
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
					label={props.lable}
				/>
			</RadioGroup>
		</FormControl>
	);
}
