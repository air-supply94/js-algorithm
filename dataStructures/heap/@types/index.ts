import {compareFunctionType} from '../../../utils/@types';
import InterfaceComparator from '../../../utils/comparator/@types';

export interface InterfaceHeap {
	heapContainer: any[]
	compare: InterfaceComparator
	fromArray: (value: any[]) => this
	sort: () => any[]
	getLeftChildIndex: (parentIndex: number) => number
	getRightChildIndex: (parentIndex: number) => number
	getParentIndex: (childIndex: number) => number
	hasParent: (childIndex: number) => boolean
	hasLeftChild: (parentIndex: number) => boolean
	hasRightChild: (parentIndex: number) => boolean
	leftChild: (parentIndex: number) => any
	rightChild: (parentIndex: number) => any
	parent: (childIndex: number) => any
	peek: () => any
	poll: () => any
	add: (item?: any) => this
	remove: (item?: any, comparator?: compareFunctionType) => this
	findIndex: (item?: any, comparator?: compareFunctionType, fromIndex?: number) => number
	isEmpty: () => boolean
	toString: () => string
	up: (startIndex?: number) => this
	down: (startIndex?: number) => this
}

export interface InterfaceMinHeap extends InterfaceHeap {
	pairIsInCorrectOrder: (parentElement, childElement) => boolean
}

export interface InterfaceMaxHeap extends InterfaceHeap {
	pairIsInCorrectOrder: (parentElement, childElement) => boolean
}
