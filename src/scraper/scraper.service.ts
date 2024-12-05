import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ScraperService {
    constructor(private readonly httpService: HttpService) {}

    async scrape(productName: string): Promise<string> {
        const url: string = 'https://www.amazon.com.br/';

        const response = await this.httpService.get(url);

        console.log(productName);
        console.log(response);

        return '';
    }
}
