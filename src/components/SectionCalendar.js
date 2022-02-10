import ArrowButton from "./ArrowButton";
import DateSelect from "./DateSelect";

const SectionCalendar = ({ array, method, secondMethod, classWrapper, classElement }) => {
	return (
		<div className={classWrapper}>
			{!isNaN(array[0]) && (
				<header className="menu-year">
					<ArrowButton changeYears={secondMethod} text={"<"} classCss={"nav-year"} />
					<ArrowButton changeYears={secondMethod} text={">"} classCss={"nav-year"} />
				</header>
			)}
			{array.map((content, index) => (
				<DateSelect method={(e) => method && method(e)} key={`index ${index}`} classCss={classElement} text={content} />
			))}
		</div>
	);
};
export default SectionCalendar;
