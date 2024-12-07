import { HttpService } from '@nestjs/axios';
import { AbstractScraper } from './AbstractScraper';
import { Subscription } from 'rxjs';

export class MercadoLivreScraper extends AbstractScraper {
    private url = 'https://lista.mercadolivre.com.br/${product-name}';

    constructor(httpService: HttpService) {
        super(httpService);
    }

    async scrape(productName: string): Promise<[]> {
        const products = [];

        const url: string = super.getUrl(this.url, productName);
        const webpage: string = await super.getWebPage(url);
        const document: Document = super.getDocument(webpage);

        document.querySelectorAll('div.poly-card').forEach((child: Element) => {
            child
                .querySelectorAll('div.poly-card__content')
                .forEach((child: Element) => {
                    child
                        .querySelectorAll('h2.component__title')
                        .forEach((child: Element) => {
                            console.log(child.querySelector('a').innerHTML);
                        });
                });
        });

        return [];
    }
}
