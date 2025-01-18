import { client } from "@/sanity/lib/client";

export const getProducts = async () => {
  const products = await client.fetch(`
    *[_type == "product"]{
  _id,
  title,
  description,
  quantity,
  price,
  dicountPercentage,
    tags,
  productImage,
  "productImage_url": productImage.asset->url
}`)
return products;
}
