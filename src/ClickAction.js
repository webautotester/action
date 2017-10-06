import Action from './Action';

export default class ClickAction extends Action {
	constructor(selector, href) {
		super();
		this.selector = selector;
		this.href = href;
	}
	
	attachTo(browser) {
		return browser.click(this.selector);
	}

	toString() {
		return `${super.toString()}: ${this.selector}, ${this.href}`;
	}

	equalsTo(action) {
		return (super.equalsTo(action) && (this.selector === action.selector) && (this.href === action.href));
	}

}
