'use strict'; 

import express from 'express'; 
import cors from 'cors'; 
import helmet from 'helmet'; 
import morgan from 'morgan'; 
import { dbConnection } from './mongo.js'; 
import userRoutes from '../src/user/user.routes.js'; // Importa userRoutes
import categoryRoutes from '../src/category/category.routes.js'
import companyRoutes from '../src/company/company.routes.js'

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT; 
        this.usuarioPath = '/api/user/'; // Corrige la ruta
        this.categoryPath = '/api/category/';
        this.companyPath = '/api/company/'
        this.middlewares();  
        this.conectarDB();  
        this.routes();  
    }
    async conectarDB() {
        await dbConnection();
    }
    middlewares() {
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(helmet());
        this.app.use(morgan('dev'));
    }
    routes() {
        this.app.use(this.usuarioPath, userRoutes);
        this.app.use(this.categoryPath, categoryRoutes);
        this.app.use(this.companyPath, companyRoutes);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port ', this.port);
        });
    }
}
export default Server;
