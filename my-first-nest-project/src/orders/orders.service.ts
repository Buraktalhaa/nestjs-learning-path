import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class OrdersService {
  constructor(
    private readonly usersService: UsersService,
    private readonly productsService: ProductsService,
  ) {}

  getOrderDetails(userId: number): void {
    const user = this.usersService.getUserById(userId);
    const product = this.productsService.showProductInfo();
    console.log('Order details for user:', user);
    console.log('Product details:', product);
  }
}
