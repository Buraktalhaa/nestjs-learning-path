import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { UsersModule } from 'src/users/users.module';
import { ProductsModule } from 'src/products/products.module';

@Module({
  providers: [OrdersService],
  imports: [UsersModule, ProductsModule],
})
export class OrdersModule {}
