import { Injectable } from '@nestjs/common';
import { ScraperService } from 'src/scraper/scraper.service';

@Injectable()
export class ProductService {
    constructor(private scraperService: ScraperService) {}

    getProductData(productName: string): string {
        return this.scraperService.scrape(productName);
    }
}
