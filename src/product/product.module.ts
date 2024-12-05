import { Module } from "@nestjs/common";
import { ProductController } from "src/product/product.controller";
import { ProductService } from "src/product/product.service";
import { ScraperModule } from "src/scraper/scraper.module";
import { ScraperService } from "src/scraper/scraper.service";

@Module({
        imports: [ScraperModule],
        controllers: [ProductController],
        providers: [ProductService],
})
export class ProductModule {}