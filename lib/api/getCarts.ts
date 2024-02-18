import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { audiophileApi } from "./baseUrl";

export const getAllCarts = () => {
  return useQuery({
    queryKey: ["carts"],
    queryFn: () => {
      return audiophileApi.get("/cart");
    },
  });
};

export const addToCart = (items: any) => {
  return useQuery({
    queryKey: ["carts"],
    queryFn: () => {
      return audiophileApi.post("/cart", items);
    },
  });
};
