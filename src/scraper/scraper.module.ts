import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ScraperService } from 'src/scraper/scraper.service';

@Module({
    imports: [
        HttpModule.register({
            timeout: 10000,
            maxRedirects: 5,
        }),
    ],
    providers: [ScraperService],
    exports: [ScraperService]
})
export class ScraperModule {}
