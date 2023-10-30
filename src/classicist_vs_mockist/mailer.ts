import { sleep } from 'bun';

export interface Mailer {
  send(message: string): void;
}

export class MailerImpl {
  send(message: string) {
    sleep(5000);
    console.log(message);
  }
}
