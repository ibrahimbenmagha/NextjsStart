export default function Product1({
  
  params,
}: {params: {productid: string}}
){
    return (

      <h1> Product 1 Details {params.productid}</h1> 
 

    )
}