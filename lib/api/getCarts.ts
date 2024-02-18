import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { audiophileApi } from "./baseUrl";

export const getAllCarts = (query: string) => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => {
      return audiophileApi.get("/cart");
    },
  });
};

export const getProduct = (id: any) => {
  return useQuery({
    queryKey: ["product"],
    queryFn: () => {
      return audiophileApi.get(`/products/${id}`);
    },
  });
};
