import { type DropDownProps } from "@/@types/dropdown"

export default function DropDown(props: DropDownProps) {

    const { data, value, onChange } = props;

    const style = "w-full h-8 text-black bg-white rounded-md text-sm text-center"
    return (
        <select
            defaultValue=""
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={style}>

            <option value="" disabled>
              Select Saved Website
            </option>

            {data.map((option) => (
                <option value={option.website}>
                    {option.website}
                </option>
            ))}
        </select>
    )
}