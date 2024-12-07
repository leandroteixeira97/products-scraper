import { Injectable } from '@nestjs/common';
import { ScraperService } from 'src/scraper/scraper.service';

@Injectable()
export class ProductService {
    constructor(private scraperService: ScraperService) {}

    async getProductData(productName: string): Promise<string> {
        return await this.scraperService.scrape(productName);
    }
}
