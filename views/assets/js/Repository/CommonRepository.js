export default class CommonRepository {
	getCelciusValue(fValue) {
		return ((fValue - 32) / 9 * 5).toFixed(2);
	}
}
