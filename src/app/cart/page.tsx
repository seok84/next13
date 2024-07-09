export default function Cart() {
    return (
        <div>
            <h4>Cart</h4>
            <CartItemList></CartItemList>
            <CartItemList></CartItemList>
            <CartItemList></CartItemList>
        </div>
    )
  }
  
  function CartItemList(){
    return(
        <div className="cart-item">
            <p>상품명</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
} 