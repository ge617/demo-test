import { LoginService } from './login.service';
export declare class Login {
    private catsService;
    constructor(catsService: LoginService);
    create(createCatDto: any): Promise<boolean>;
    error(): Promise<{
        name: string;
        password: string;
    }[]>;
}
