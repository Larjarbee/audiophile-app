import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const audiophileApi = axios.create({
  baseURL: 'http://localhost:4001',
});

export const getAllProducts = (query: string) => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => {
      return audiophileApi.get(`/products?category=${query}`);
    },
  });
};

export const getProduct = (id: any) => {
  return useQuery({
    queryKey: ['product'],
    queryFn: () => {
      return audiophileApi.get(`/products/${id}`);
    },
  });
};

// const queryClient = useQueryClient()
//   const getProductsMutation = useMutation({
//     mutationFn: getProducts,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['todos'] });
//     },
//   });
