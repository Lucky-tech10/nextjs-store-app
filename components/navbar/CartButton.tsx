import Link from "next/link";
import { Button } from "../ui/button";
import { LuShoppingCart } from "react-icons/lu";
import { fetchCartItems } from "@/utils/action";

async function CartButton() {
  const numItemsInCart = await fetchCartItems();
  return (
    <Button
      asChild
      size="icon"
      variant="outline"
      className="flex items-center justify-center relative"
    >
      <Link href="/cart">
        <LuShoppingCart />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}

export default CartButton;
