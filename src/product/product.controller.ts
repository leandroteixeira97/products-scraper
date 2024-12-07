import { Controller, Param, Post } from '@nestjs/common';
import { ProductService } from 'src/product/product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Post(':product')
    getProductData(@Param('product') productName: string): string {
        return this.productService.getProductData(productName);
    }
}
