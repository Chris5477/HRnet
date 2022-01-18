import { listMaxResult } from "../ListingComponents/Listing-option";
import InputWrapper from "./InputWrapper";
import Option from "./Option";

const MenuListEmployee = () => {
	return (
		<div className="menu-list-employee">
			<span>
				Show
				<select>
					{listMaxResult.map(({ value, text }, index) => (
						<Option key={`index ${index}`} value={value} text={text} />
					))}
				</select>
				entries
			</span>

			<InputWrapper label={"search"} text={"Search"} />
		</div>
	);
};
export default MenuListEmployee;
