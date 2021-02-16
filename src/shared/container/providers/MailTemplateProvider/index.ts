import { container } from 'tsyringe';

import IMailTempateProvider from './models/IMailTemplateProvider';
import HandlebarsMailTemplateProvider from './implementations/HandlebarsMailTemplateProviser';

const providers = {
  handlebars: HandlebarsMailTemplateProvider,
};

container.registerSingleton<IMailTempateProvider>(
  'MailTemplateProvider',
  providers.handlebars,
);
