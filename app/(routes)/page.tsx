import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import BillBoard from '@/components/billboard';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';
export const revalidate = 0;

const HomePage = async () => {
	const products = await getProducts({ isFeatured: true });
	const billboard = await getBillboard(
		'497b7ea3-d7df-4f32-b720-0edba44b8896'
	);

	return (
		<Container>
			<div className=" space-y-10 pb-10">
				<BillBoard data={billboard} />
			<div className=" flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
				<ProductList title="Featured Products" items={products} />
			</div>
			</div>
		</Container>
	);
};

export default HomePage;
