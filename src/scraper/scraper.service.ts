import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { JSDOM } from 'jsdom';

@Injectable()
export class ScraperService {
    constructor(private readonly httpService: HttpService) {}

    scrape(productName: string): string {
        const url = ''

        this.httpService
            .get(url + productName)
            .pipe(map((response) => response.data))
            .subscribe((data) => {
                const prices = [];

                const domElement = new JSDOM(data);
                const document = domElement.window.document;

                //To do
            });

        return productName;
    }
}
