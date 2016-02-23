import {Field} from './field';

export interface Node {
	nid?: number,
	_links?: Object,
	type: any,
	title: Field[],
	body?: Field[]
}
