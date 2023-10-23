import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AuthenticationService {
    private logger = new Logger('AuthenticationService');
    constructor(
    ) { }
}
