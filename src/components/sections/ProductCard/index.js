"use client";
import React, { useState } from "react";
import styles from "./ProductCard.module.scss";
import Productdetails from "@/components/sections/Productdetails";
import cx from "classnames";
import AddButton from "@/components/base/AddButton";
import { useRouter } from "next/navigation";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { apiPost } from "@/helpers/api";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  deleteItemFromBasket,
} from "@/redux/basket/addUpdateBasket";
import Image from "next/image";
import { useSnackbar } from "@/hooks/useSnakBar";
const dummydata = {
  ratings: {
    average: 4.5,
    count: 10,
  },
  dimensions: {
    length: 10,
    width: 5,
    height: 2,
  },
  shipping_info: {
    free_shipping: true,
    estimated_delivery: "2-3 business days",
  },
  _id: "655733b294651a3e957bb3ea",
  name: "Lembu Product",
  description: "This is a sample product description.",
  price: 29.99,
  category_ids: [],
  brand: "Sample Brand",
  stock_quantity: 100,
  images: [
    "https://www.tastycircle.com/wp-content/uploads/2020/08/Garlic-Pickle-Veluthulli-Achar-500x500.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ27k4rXyjQz2SMl-PNzcdJYEcsYUGyvP-CbCGfnMxnf4VxfdELB0W6N-g5kosBgX3biPE&usqp=CAU",
  ],
  attributes: [
    {
      name: "Color",
      value: "Red",
      _id: "655733b294651a3e957bb3eb",
    },
    {
      name: "Size",
      value: "Medium",
      _id: "655733b294651a3e957bb3ec",
    },
  ],
  reviews: [],
  sku: "SAMPLE_SKU",
  weight: 1.5,
  tags: ["tag1", "tag2"],
  availability: "In Stock",
  related_products: [],
  created_at: "2023-11-17T09:34:42.137Z",
  updated_at: "2023-11-17T09:34:42.137Z",
  __v: 0,
  discount: 10,
};
const ProductCard = ({
  data = dummydata,
  className,
  quantity = 0,
  wishlist = false,
  disableAddButton = false,
  ...props
}) => {
  const { data: session } = useSession();
  const discountedPrice = data?.price - (data?.price * data?.discount) / 100;
  const [productQuantity, setproductQuantity] = useState(quantity);
  const [isInWishList, setIsInWishList] = useState(wishlist);
  const dispatch = useDispatch();
  const { openSnackbar } = useSnackbar();
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/product-details/" + data._id);
  };
  const addToWishList = async (e) => {
    e.stopPropagation();
    setIsInWishList(!isInWishList);
    const addres = await apiPost(
      "/api/wishlist",
      {
        user: session?.user?.id,
        product: data?._id,
      },
      openSnackbar
    );
    if (addres.success) {
      openSnackbar("success", "Added to wishlist");
    }
  };
  const handleAddToBasket = () => {
    dispatch(addToBasket({ product: data, quantity: 1 })); // Assuming data contains the product information
  };

  const handleRemoveFromBasket = () => {
    dispatch(removeFromBasket(data._id));
  };
  const deleteFromBasket = () => {
    dispatch(deleteItemFromBasket(data._id));
  };
  return (
    <div
      onClick={handleRedirect}
      className={cx(styles.cardContainer, className)}
      {...props}
    >
      <div className={styles.discountLabel}>{data?.discount}% off</div>
      <div className={styles.wishIcon} onClick={addToWishList}>
        {!isInWishList ? <FavoriteBorderIcon /> : <FavoriteIcon />}
      </div>
      <div className={styles.cardimg}>
        {/* <Image
          src={data?.images?.length ? data?.images[0] : ""}
          width={500}
          height={500}
          style={{
            width: "100%",
            height: "100%",
          }}
          alt={data?.name}
        /> */}
        {/* <img src={data?.images?.length ? data?.images[0] : ""} /> */}
        <Image
          src={data?.images?.length ? data?.images[0] : ""}
          height={1000}
          width={1000}
          alt="image"
        />
      </div>

      <div className={styles.cardinfo}>
        <div className={styles.productName}>{data.name}</div>
        <div className={styles.brand}>{data.brand}</div>
        <div className={styles.details}>
          <div className={styles.priceInfo}>
            <del>₹{data.price}</del>{" "}
            <div className={styles.price}>₹{discountedPrice.toFixed(2)}</div>{" "}
          </div>
          <div style={{ fontSize: "13px", fontWeight: "100px" }}>
            {data?.unitQuantity?.value}
            {data?.unitQuantity?.unit}
          </div>
        </div>

        <div className={styles.cardlower}></div>
        <AddButton
          disableAddButton={disableAddButton}
          productQuantity={productQuantity}
          setproductQuantity={setproductQuantity}
          product={data}
          onAdd={handleAddToBasket}
          deleteFromBasket={deleteFromBasket}
          onRemove={handleRemoveFromBasket}
        />
      </div>
    </div>
  );
};

export default ProductCard;
