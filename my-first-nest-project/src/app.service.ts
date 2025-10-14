import {
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleInit,
} from '@nestjs/common';

@Injectable()
export class AppService
  implements OnModuleInit, OnApplicationBootstrap, OnApplicationShutdown
{
  // Uygulama kapanırken çağrılır.
  // Ne zaman çalışır:
  // Uygulama kapanırken, tüm modüller ve servisler hala kullanılabilir durumdayken.
  onApplicationShutdown(signal?: string) {
    console.log('App service shutdown' + signal);
  }

  // Modülün başlatılması sırasında çağrılır.
  // Ne zaman çalışır:
  // Modül yüklendiğinde, bağımlılıklar hazır hale geldiğinde ama tüm uygulama henüz tam ayağa kalkmadan.
  onModuleInit() {
    console.log('AppService started');
  }

  // Tüm modüller, servisler, controller’lar ve bağımlılıklar yüklendikten sonra çağrılır.
  // Ne zaman çalışır:
  // Uygulamanın tamamen ayağa kalktığı anda.
  onApplicationBootstrap() {
    console.log('ApplicationBootstrap started');
  }

  getHello(): string {
    return 'Hello World!';
  }
}
