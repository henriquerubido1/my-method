import { checkedStyle, uncheckedStyle } from '../constants/styles';

export function finishDay ({ target }) {

	if (target.className !== uncheckedStyle) {
		localStorage.setItem('finishedDays', target.innerHTML - 1);
		return target.className=uncheckedStyle;
	}  else {
		localStorage.setItem('finishedDays', target.innerHTML);
		return target.className=checkedStyle;
	}
}
