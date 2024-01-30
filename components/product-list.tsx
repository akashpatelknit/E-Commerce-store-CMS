import { Product } from '@/types';
import NoResult from './ui/no-result';
import ProductCard from './ui/product-card';

interface ProductListProps {
	title: string;
	items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
	return (
		<div className=" space-y-4">
			<h3 className=" font-bold text-3xl">{title}</h3>
			{items.length === 0 && <NoResult />}
			<div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
				{items.map((item) => (
					<ProductCard key={item.id} data={item} />
				))}
			</div>
		</div>
	);
};

export default ProductList;
