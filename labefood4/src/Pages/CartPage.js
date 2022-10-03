import React, { useCallback, useContext, useEffect, useState } from "react";
import { BottomMenu } from "../Components/BottomMenu";
import { Button, CardContainer, IFutureLogo, Tittle } from "../Style/GlobalStyle";
import LogoFood4 from "../Assets/logo-future-eats-invert.png"
import { TittleCart } from "../Style/GlobalStyle";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../Context/GlobalStateContext";
import { RestaurantCard } from "../Components/RestaurantCard";
import GlobalState from "../Context/GlobalState";
import axios from "axios";
import { BASE_URL, token } from "../Constants/Constants";



export const CartPage = () => {
    const [cart, setCart] = useState(false)
    const {states, setters, requests} = useContext(GlobalStateContext);
    const [totalPrice, setTotalPrice] = useState();
    const [address, setAddress] = useState({});
    const [paymentMethodRadio, setPaymentMethodRadio] = useState(undefined)
    const [cartProducts, setCartProducts] = useState(
        states && states.filter((item) => {
            return item.quantity > 0
        })
    );

    let products = 
    cartProducts && cartProducts.map((item) => {
        return { id: item.id, quantity:item.quantity};
    });

    const body = {
        products: products,
        paymentMethod: paymentMethodRadio,

    };

    const getAddress = () => {
        axios
        .get(`${BASE_URL}/profile/address`, {
            headers: {auth: token},
        })
        .then((response) => {
            if (response.data.address) {
                setAddress(response.data.address);
            }
        })
        .catch((err) => {
            console.log(err.response);
        });
    };

    const placeOrder = () => {
        axios.post(`${BASE_URL}/restaurants/order`, body, {
            headers: {auth:token}
        })
        .then((response) => {
            alert('Pedido realizado com sucesso!')
        })
        .catch((err) => {
            alert("Já possui o pedido em andamento, POR FAVOR AGUARDE!")
            console.log(err.response);
        })
    }
    const shippingPrice = cartProducts.length === 0? '0,00' : cartProducts[0].cartProducts.toFixed(2).toString().replace(".", ",")

    const onClickProduct = useCallback((produto) => {
        produto.quantity = 0;
        cartProducts.splice(cartProducts.indexOf(produto), 1)
        setCart(!cart)
    });

    useEffect(() => {
        if (cartProducts.length > 0) {
            setCartProducts([...cartProducts]);
        }
    }, [cart]);

    useEffect(() => {
        if (cartProducts.length > 0) {
            let newPrice = 0;
            cartProducts.forEach((produto) => {
                newPrice += products.price * products.quantity;
            });
            setTotalPrice(newPrice);
        }
    }, [cartProducts]);

    if (cartProducts.length === 0) {
        return (
            <CardContainer>
                <header>
                    <TittleCart> Meu Carrinho </TittleCart>
                </header>

                <div className="address">
                    <p> Endereço de entrega</p>
                    <p>
                        {!address && "Endereço não encontrado :/"}
                        {address.complement 
                        ? `${address.street !== undefined ? address.street : ""}, ${address.number !== undefined ? address.number : ""
                    }${
                        address.complement !== undefined ? address.complement : ""
                    } ${address.neighbourhood !== undefined ? " - " + address.neighbourhood : ""}`
                : `${address.street !== undefined ? address.street : ""} ${
                    address.number !== undefined ? "," + address.number : ""
                } ${
                    address.neighbourhood !== undefined ? " - " + address.neighbourhood : ""
                }`}
                        
                    </p>
                </div>
                <div className="title">
                    <h2>Carrinho Vazio</h2>
                </div>
                <div className="price-container">
                    <p>SUBTOTAL</p>
                </div>
                <div className="price">
                    <h6> Frete R$0,00</h6>
                    <p>R$00,00</p>
                </div>
                <div className="payment-title">
                    <p>Forma de pagamento</p>
                </div>
                <span className="line"></span>
                <div>
                    <input type="radio" name="pagamento" value={"money"} onChange={setPaymentMethodRadio}/>
                    <label htmlFor="dinheiro">Dinheiro</label>
                </div>
                <div>
                    <input type="radio" name="pagamento" value={"creditcard"} onChange={setPaymentMethodRadio} />
                    <label htmlFor="cartao">Cartão de crédito</label>
                </div>
                <div className="submit-button">
                    <Button
                    type="submit"
                    colorScheme="red"
                    variant="solid"
                    borderRadius="2px"
                    height="2.625rem"
                    opacity="0.80"
                    >Confirmar</Button>
                </div>
                <footer />
            </CardContainer>
        );
    } else {
        return (
            <CardContainer>
                <header>
                    <h1> Meu carrinho00</h1>
                </header>
                <div className="address">
                    <p>Endereço de entrega</p>
                    <p>
                    {!address && "Endereço não encontrado :/"}
            {address.complement
              ? `${address.street !== undefined ? address.street : ""}, ${
                  address.number !== undefined ? address.number : ""
                }, ${
                  address.complement !== undefined ? address.complement : ""
                } ${
                  address.neighbourhood !== undefined
                    ? " - " + address.neighbourhood
                    : ""
                }`
              : `${address.street !== undefined ? address.street : ""} ${
                  address.number !== undefined ? ", " + address.number : ""
                } ${
                  address.neighbourhood !== undefined
                    ? " - " + address.neighbourhood
                    : ""
                }`}
                    </p>
                </div>
                <div className="rest-info">
                    <h2>{products.name}</h2>
                    <p>{address}</p>
                    <p>{products.delivery} min</p>
                </div>

                {cartProducts && cartProducts.filter((item) => {
                    return item.quantity > 0;
                }) 
                .map((i) => {
                    return (
                <>
                <CardContainer key={i.id}>
                    <RestaurantCard 
                    image={i && i.photoUrl && i.photoUrl}
                    title={i.name}
                    description={i.description}
                    price={i.price.toFixed(2)}
                    />
                    <div className="buttons">
                        {i.quantity === 0 || i.quantity === undefined ? (
                            <div></div>
                        ) : (
                            <span>{i.quantity}</span>
                        )}
                        <Button
                        onClick={() => onClickProduct(i)}
                        className="remove-button"
                        >
                            <p>Remover</p>
                        </Button>
                    </div>
                </CardContainer>
                </>
            );
        })}
        <div className="price-container">
        <div className="subtotal">
            <p>SUBTOTAL</p>
        </div>
          <div className="price">
          <h6>{`Frete R$${shippingPrice}`}</h6>
            <p>{`R$${totalPrice && totalPrice.toFixed(2)}`}</p>
          </div>
        </div>
        <div className="payment-title">
          <p>Forma de pagamento</p>
        </div>
        <span className="line"></span>
                <div>
                    <input type="radio" name="pagamento" value={"money"} onChange={setPaymentMethodRadio}/>
                    <label htmlFor="dinheiro">Dinheiro</label>
                </div>
                <div>
                    <input type="radio" name="pagamento" value={"creditcard"} onChange={setPaymentMethodRadio} />
                    <label htmlFor="cartao">Cartão de crédito</label>
                </div>
                <div className="submit-button">
                    <Button
                    type="submit"
                    colorScheme="red"
                    variant="solid"
                    borderRadius="2px"
                    height="2.625rem"
                    onClick={placeOrder}
                    >Confirmar
                    </Button>
                </div>
                <footer />

        </CardContainer>
        )
    }
}

export default CartPage;

/*<div>
            <h1>Hello Cart</h1>
            <BottomMenu page="cart" />
        </div>*/
