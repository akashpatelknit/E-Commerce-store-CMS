'use client';

import { Product } from '@/types';
import Image from 'next/image';
import IconButton from './icon-button';
import { Expand, ShoppingCart } from 'lucide-react';
import Currency from './currency';
import { useRouter } from 'next/navigation';
import { MouseEventHandler } from 'react';
import usePreviewModal from '@/hooks/use-preview-model';
import useCart from '@/hooks/use-cart';

interface ProductCardProps {
	data: Product;
}

const ProductCard: React.FC<Product> = ({ data }) => {
	const router = useRouter();
	const previewModal = usePreviewModal();
	const cart = useCart();

	const handleClick = () => {
		router.push(`/products/${data?.id}`);
	};

	const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.stopPropagation();

		previewModal.onOpen(data);
	};
	const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.stopPropagation();

		cart.addItem(data);
	};

	return (
		<div
			className=" bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
			onClick={handleClick}
		>
			<div className=" aspect-square rounded-xl bg-gray-100 relative">
				<Image
					src={data?.images[0]?.url}
					alt={data?.name}
					className=" object-cover rounded-md aspect-square"
					fill
				/>
				<div className=" opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
					<div className=" flex gap-x-6 justify-center">
						<IconButton
							onClick={onPreview}
							icon={
								<Expand size={20} className=" text-gray-600" />
							}
						/>
						<IconButton
							onClick={onAddToCart}
							icon={
								<ShoppingCart
									size={20}
									className=" text-gray-600"
								/>
							}
						/>
					</div>
				</div>
			</div>
			<div>
				<p className=" font-semibold text-lg">{data.name}</p>
				<p className=" text-sm text-gray-500">{data.category?.name}</p>
			</div>
			<div className=" flex items-center justify-start">
				<Currency value={data.price} />
			</div>
		</div>
	);
};

export default ProductCard;