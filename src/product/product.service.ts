import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    test(productName: string): string {
        console.log(productName);
        return 'Your product ' + productName + ' costs 1000';
    }
}
