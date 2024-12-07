import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { JSDOM } from 'jsdom';
import { MercadoLivreScraper } from './marketplaces/MercadoLivreScraper';

@Injectable()
export class ScraperService {
    constructor(private readonly httpService: HttpService) {}

    async scrape(productName: string): Promise<string> {
        const mercadoLivreScraper: MercadoLivreScraper = new MercadoLivreScraper(this.httpService);

        await mercadoLivreScraper.scrape(productName);

        return productName;
    }
}
