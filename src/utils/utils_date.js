/* istanbul ignore file */
export const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
export const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const schemaMonths = (year) => {
	return {
		January: 31,
		February: year % 4 === 0 ? 29 : 28,
		March: 31,
		April: 30,
		May: 31,
		June: 30,
		July: 31,
		August: 31,
		September: 30,
		October: 31,
		November: 30,
		December: 31,
	};
};
