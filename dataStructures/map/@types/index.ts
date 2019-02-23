import {InterfaceDoubleLinkedList} from '../../doubleLinkedList/@types';

export interface InterfaceMap {
	doubleLinkedList: InterfaceDoubleLinkedList;
	size: number,
	delete: (key?: any) => this
	set: (key?: any, value?: any) => this
	forEach: (callback: (value?: any, key?: any) => any) => this
	entries: () => [any, any][]
	values: () => any[]
	keys: () => any[]
	clear: () => this
	get: (key?: any) => any
	has: (key?: any) => boolean
}