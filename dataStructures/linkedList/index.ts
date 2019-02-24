import LinkedListNode from './linkedListNode';
import Comparator from '../../utils/comparator/index';
import {compareFunctionType} from '../../utils/@types';
import {InterfaceLinkedList, InterfaceLinkedListNode} from './@types';

export default class LinkedList implements InterfaceLinkedList {
	constructor(comparatorFunction?: Comparator | compareFunctionType) {
		this.clear();
		this.compare = comparatorFunction instanceof Comparator ? comparatorFunction : new Comparator(comparatorFunction);
	}
	
	public compare;
	public head;
	public tail;
	public size;
	
	public clear() {
		this.head = this.tail = null;
		this.size = 0;
		return this;
	};
	
	public toString(callback) {
		return this.toArray().map(node => node.toString(callback)).toString();
	};
	
	public toArray() {
		const nodes: InterfaceLinkedListNode[] = [];
		let currentNode = this.head;
		while (currentNode) {
			nodes.push(currentNode);
			currentNode = currentNode.next;
		}
		return nodes;
	};
	
	public fromArray(values) {
		values.forEach(value => this.append(value));
		return this;
	};
	
	public deleteHead() {
		const deletedHead = this.head;
		if (this.head === this.tail) {
			this.clear();
		} else {
			this.head = this.head.next;
			--this.size;
		}
		return deletedHead;
	};
	
	public deleteTail() {
		const deletedTail = this.tail;
		let currentNode = this.head;
		if (this.head === this.tail) {
			this.clear();
		} else {
			while (currentNode.next) {
				if (!currentNode.next.next) {
					currentNode.next = null;
					break;
				} else {
					currentNode = currentNode.next;
				}
			}
			this.tail = currentNode;
			--this.size;
		}
		return deletedTail;
	};
	
	public find(findParams) {
		const {value, callback = {}} = findParams;
		let currentNode = this.head;
		
		while (currentNode) {
			if (typeof callback === 'function' && callback(currentNode.value)) {
				break;
			} else if (this.compare.equal(currentNode.value, value)) {
				break;
			}
			currentNode = currentNode.next;
		}
		
		return currentNode;
	};
	
	public delete(value) {
		let deletedNode = null;
		while (this.head && this.compare.equal(this.head.value, value)) {
			deletedNode = this.head;
			this.head = this.head.next;
			--this.size;
		}
		
		let currentNode = this.head;
		if (currentNode) {
			while (currentNode.next) {
				if (this.compare.equal(currentNode.next.value, value)) {
					deletedNode = currentNode.next;
					currentNode.next = currentNode.next.next;
					--this.size;
				} else {
					currentNode = currentNode.next;
				}
			}
		}
		
		this.tail = currentNode;
		if (this.tail) {
			this.tail.next = null;
		}
		return deletedNode;
	};
	
	public append(value) {
		const newNode = new LinkedListNode(value);
		
		if (this.isEmpty()) {
			this.head = this.tail = newNode;
		} else {
			this.tail.next = this.tail = newNode;
		}
		++this.size;
		
		return this;
	};
	
	public prepend(value) {
		const newNode = new LinkedListNode(value, this.head);
		if (this.isEmpty()) {
			this.head = this.tail = newNode;
		} else {
			this.head = newNode;
		}
		++this.size;
		
		return this;
	};
	
	public reverse() {
		const nodes: InterfaceLinkedListNode[] = [];
		while (!this.isEmpty()) {
			nodes.push(this.deleteTail().value);
		}
		this.fromArray(nodes);
		return this;
	};
	
	public has(value) {
		return !!this.find({value: value});
	};
	
	public isEmpty() {
		return this.size === 0;
	};
}
