import { Controller, Param, Post } from '@nestjs/common';
import { ProductService } from 'src/product/product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Post(':product')
    async getProductData(@Param('product') productName: string): Promise<string> {
        return await this.productService.getProductData(productName);
    }
}
