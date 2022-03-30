// If webpack can't find something called products inside the node_modules,
// then it is going to take a look at the Module Federation plugin in the remotes list
import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount} from 'cart/CartShow';

console.log('Container!');

productsMount(document.querySelector('#my-products'));
cartMount(document.querySelector('#my-cart'));