/* Index.js */
/* Inside this file you will import your other helper files */

// Import each file using the * notation
// This will import automatically every function exported by these files
import NotFound from './404'; 
import About from './about';
import Blog from './blog'; 
import CMS from './cms'; 
import FAQ from './faq'; 
import Home from './home'; 
import Potfolio from './potfolio'; 
import Pricing from './pricing'; 
import Product from './product'; 
import ProductCategory from './productCategory'; 
import UnderConstruction from './underConstruction'; 
// import * as Table from './Table.js';

// Export again
export {
    NotFound, 
    About,
    Blog, 
    CMS,  
    FAQ,  
    Home,  
    Potfolio,  
    Pricing,  
    Product,  
    ProductCategory, 
    UnderConstruction, 
};