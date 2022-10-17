import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../Components/Loading";
import { RestaurantCard } from "../Components/RestaurantCard";
import { BASE_URL } from "../Constants/Constants";
import GlobalStateContext from "../Context/GlobalStateContext";
import useRequestData from "../Hooks/useRequestData";
import { ContainerImg, ContainerRestaurant, DetalhesRestaurant, DivEnvio, Header, SpanDetalhesRestaurant } from "../Style/GlobalStyle";


const RestaurantPage = () => {
    const { restauranteId } = useParams();
    const { arrayProducts, setArrayProducts, states, setters } = useContext(GlobalStateContext);
    const [data, error, isLoading, reload, setReload] = useRequestData(`${BASE_URL}restaurants/${states.restaurantId}`, localStorage.getItem("token")

    );

    const handleAddProduct = (product, quantity) => {
        const newCart = [...arrayProducts];
        newCart.push({ ...product, quantity: quantity, restauranteId: restauranteId, restaurant: data.restaurant.name, address: data.restaurant.address, time: data.restaurant.deliveryTime, shipping: data.restaurant.shipping });
        setArrayProducts(newCart);
    };
    const handleRemoverProduct = (product) => {
        const productIndex = arrayProducts.findIndex((item) => item.id === product.id);
        const newCart = [...arrayProducts];
        newCart.splice(productIndex, 1);
        setArrayProducts(newCart);
    };

    useEffect(() => {
        const store = JSON.parse(localStorage.getItem("ProductCart"));
        {
            store && setArrayProducts(store);
        }
    }, []);

    let categorias = []
    if (data) {
        let categoriasDois
        for (let i = 0; i < data.restaurant.products.length; i++) {
            if (i === 0) {
                categorias.push(data.restaurant.product[0].category)
            } else {
                for (let c = 0; c < categorias.length; c++) {
                    if (data.restaurant.product[i].category !== categorias[c]) {
                        categoriasDois = false
                    } else {
                        categoriasDois = true
                        break
                    }
                }
                !categoriasDois && categorias.push(data.restaurant.products[i].category)
            }
        }
    }

    const dataRender = () => {
        let resultado = []
        for (let i = 0; i < categorias.length; i++) {
            let categoriasByProdutos = data.restaurant.products.filter(product => product.category === categorias[i])

            resultado.push(<div key={categorias[i]}>
                <h5>{categorias[i]}</h5>
                {categoriasByProdutos.map(item => {
                    return <RestaurantCard key={item.id} product={item} handleAddProduct={handleAddProduct} handleRemoverProduct={handleRemoverProduct} />
                })}
            </div>)
        }
        return resultado
    }
    return (
        <>
            <Header mostrarSeta={"true"} mostrarTitulo={"true"} title={"Restaurante"} />
            {isLoading && <Loading />}
            {data && (
                <ContainerRestaurant>
                    <ContainerImg>
                        <img className="imageProduct" src={data.restaurant.logoUrl} alt="Logo Restaurante" />
                    </ContainerImg>
                    <DetalhesRestaurant>
                        <h4>{data.restaurant.name}</h4>
                        <SpanDetalhesRestaurant>
                            {data.restaurant.category}
                        </SpanDetalhesRestaurant>
                        <DivEnvio>
                            <SpanDetalhesRestaurant>
                                {data.restaurant.deliveryTime} min
                            </SpanDetalhesRestaurant>
                            <SpanDetalhesRestaurant>
                                Frete{" "}
                                {data.restaurant.shipping.toLocalString("pt-BR", {
                                    style: "moeda"

                                })}
                            </SpanDetalhesRestaurant>
                        </DivEnvio>
                        <SpanDetalhesRestaurant>
                            {data.restaurant.address}
                        </SpanDetalhesRestaurant>
                        {data && dataRender()}
                    </DetalhesRestaurant>
                </ContainerRestaurant>
            )}

        </>
    )

}

export default RestaurantPage;




