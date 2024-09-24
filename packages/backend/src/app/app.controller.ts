import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    public getData() {
        return this.appService.getData();
    }

    @Get('status-db')
    public async getStatusDb() {
        return {
            success: await this.appService.checkConnection(),
        };
    }
}
