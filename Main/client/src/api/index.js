import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});


export const fetchProducts = () => API.get('/products');
export const createProduct = (newProduct) => API.post('/products',newProduct);
export const updateProduct = (id, updatedProduct) => API.patch(`/products/${id}`, updatedProduct);
export const deleteProduct = (id) => API.delete(`/products/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const getUsers = () => API.get('/user');

export const fetchDeals = () => API.get('/deals');
export const createDeal = (newDeal) => API.post('/deals', newDeal);
export const deleteDeal = (id) => API.delete(`/deals/${id}`);
export const updateDeal = (id, updateDeal) => API.patch(`/deals/${id}`, updateDeal);

export const updateNotification = (id, updateNotification) => API.patch(`/notifications/${id}`, updateNotification);
export const getNotification = () => API.get('/notifications');

export const tradeSubmission = (id,ac, tradeSubmission) => API.patch(`/tradeSubmission/${id}/${ac}`, tradeSubmission);

export const fetchTransactions = () => API.get('/transaction');
export const createTransaction = (newTransaction) => API.post('/transaction',newTransaction);
export const updateTransaction = (id,type,value, updateTransaction) => API.patch(`/transaction/${id}/${type}/${value}`, updateTransaction);

export const fetchOrders = () => API.get('/orders');
export const createOrder = (newOrder) => API.post('/orders', newOrder);
export const updateOrder = (id, updateOrder) => API.patch(`/orders/${id}`, updateOrder);
export const deleteOrder = (id) => API.delete(`/orders/${id}`);