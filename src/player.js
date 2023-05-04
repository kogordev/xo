export default class Player {
	constructor(label, labelColor, borderColor) {
		this.username = '';
		this.label = label;
		this.labelColor = labelColor;
		this.borderColor = borderColor;
		this.wins = 0;
		this.winAxes = null;
		this.active = false;
	}
}
