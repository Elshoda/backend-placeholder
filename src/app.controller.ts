import { Controller, Get,Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  [x: string]: any;
  constructor(private readonly appService: AppService) { }
  
  @Get()
  @Render('index')
  root() { }
  
  @Get("/posts-manual")
  @Render('posts')
  rootpost(){}
}
