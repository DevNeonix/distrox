import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class AppService {
    constructor(private readonly connection: Connection) {}

    public getData(): { message: string } {
        return { message: 'Hello API' };
    }

    public async checkConnection(): Promise<boolean> {
        try {
            await this.connection.query('SELECT 1');
            return true;
        } catch (error) {
            return false;
        }
    }
}
