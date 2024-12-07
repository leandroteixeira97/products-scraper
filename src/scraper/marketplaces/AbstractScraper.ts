import { HttpService } from '@nestjs/axios';
import { JSDOM } from 'jsdom';
import { lastValueFrom, map } from 'rxjs';

export abstract class AbstractScraper {
    protected httpService: HttpService;

    constructor(httpService: HttpService) {
        this.httpService = httpService;
    }

    async scrape(productName: string): Promise<[]> {
        return [];
    }

    protected getUrl(url: string, productName: string): string {
        return url.replaceAll('${product-name}', productName);
    }

    protected getWebPage(url: string): Promise<string> {
        return lastValueFrom(
            this.httpService.get(url).pipe(map((response) => response.data)),
        );
    }

    protected getDocument(webpage: string): Document {
        const domElement: JSDOM = new JSDOM(webpage);
        return domElement.window.document;
    }
}
