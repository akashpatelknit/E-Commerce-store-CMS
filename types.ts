export interface BillBoard {
	id: string;
	label: string;
	imageUrl: string;
}

export interface Category {
	id: string;
	name: string;
	billBoard: BillBoard;
}

export interface Product {
	id: string;
	name: string;
	price: number;
	category: Category;
	isFeatured: boolean;
	size: Size;
	color: Color;
	images: Image[];
}

export interface Size {
	id: string;
	name: string;
}

export interface Color {
	id: string;
	name: string;
	value: string;
}

export interface Image {
	id: string;
	url: string;
}
