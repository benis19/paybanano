import {megaToRaw} from 'banano-unit-converter';

export default function amountIsValid(amount) {
	try {
		megaToRaw(amount);
	} catch (error) {
		return false;
	}

	return true;
}
