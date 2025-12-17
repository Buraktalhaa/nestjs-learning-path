import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // iki tane get varsa sadece ilkini kullanır diğerini görmez.(eger hi path i yoksa)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hi')
  sayHi(): string {
    console.log('hi');
    return this.appService.sayHi();
  }
}
