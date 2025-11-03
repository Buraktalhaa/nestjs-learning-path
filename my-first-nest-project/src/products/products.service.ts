import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  showProductInfo() {
    console.log('This is a product info');
  }
}
