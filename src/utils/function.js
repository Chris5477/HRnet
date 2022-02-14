/* istanbul ignore file */
export const correctPositionDay = (year, indexMonth, days) => {
	const firstOfMonth = new Date(year, indexMonth, 1);
	const getDay = String(firstOfMonth).split(" ")[0];
	const findIndex = days.indexOf(getDay);
	return findIndex;
};

export const selectMonth = (e, setteurOne, setteurThree) => {
	setteurOne(e.target.innerText);
	setteurThree(false);
};

export const selectYear = (e, setteurOne, setteurTwo, setteurThree) => {
	setteurOne(e.target.innerText);
	setteurTwo(false);
	setteurThree(0);
};
