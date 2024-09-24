interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  console.log(slug);
  return <div>ProductPage {sortOrder}</div>;
};

export default ProductPage;
